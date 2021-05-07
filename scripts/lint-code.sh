#!/usr/bin/env bash

base_dir="$(cd "$(dirname "$0")/.." && pwd -P)"
tmp_dir="$(mktemp -d)" || exit 1

errors=()
files=()

function collect_file () {
  file_path="$1"
  file_dir="$(dirname "${file_path:${#base_dir} + 1}")"
  file_fullname="$(basename "${file_path:${#base_dir} + 1}")"
  file_name="${file_fullname%.*}"
  file_ext="${file_fullname##*.}"

  if [ "$file_ext" == "$file_name" ]; then
    file_ext=""
  elif [ "$file_ext" != "md" ]; then
    return
  fi

  file_pathname="$file_dir/$file_name"

  if [ "$file_dir" == "." ]; then
    file_pathname="$file_name"
  else
    mkdir -p "$tmp_dir/$file_dir"
  fi

  if [ "$file_ext" == "" ]; then
    cat "$file_path" > "$tmp_dir/$file_pathname"
    files+=("$file_pathname")
  else
    inside_block=false
    block=""
    i=1

    while IFS= read -r line; do
      if [ "$line" == "\`\`\`the" ]; then
        inside_block=true
      elif [[ "$line" == "\`\`\`" && "$inside_block" == true ]]; then
        printf "%s" "$block" > "$tmp_dir/$file_pathname-$i"
        files+=("$file_pathname-$i")

        inside_block=false
        block=""
        ((i++))
      elif [ "$inside_block" == true ]; then
        line_with_nl="$line"$'\n'

        if [ -z "$block" ]; then
          block="$line_with_nl"
        else
          block="$block$line_with_nl"
        fi
      fi
    done < "$1"
  fi
}

function collect_files () {
  for entry in "$1"/*; do
    if [ ! -f "$entry" ]; then
      collect_files "$entry"
      continue
    fi

    collect_file "$entry"
  done
}

function log_error () {
  loc="$1:"

  if [ "$#" -gt 2 ]; then
    loc="$loc$(($3 + 1)):"
  fi

  errors+=("$loc $2")
}

function main () {
  collect_files "$base_dir"
  collect_files "$(cd "$base_dir/.github" && pwd -P)"

  for file in "${files[@]}"; do
    echo "$file"
  done

  if [ ${#errors[@]} -ne 0 ]; then
    for error in "${errors[@]}"; do
      echo "$error" 1>&2
    done

    exit 1
  fi

  rm -rf "$tmp_dir"
}

main "$@"
