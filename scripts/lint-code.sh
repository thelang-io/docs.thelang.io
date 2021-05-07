#!/usr/bin/env bash

base_dir="$(cd "$(dirname "$0")/.." && pwd -P)"
tests_dir="$base_dir/tests"
tmp_dir="$(mktemp -d)" || exit 1

errors=()

function log_error () {
  loc="$1:"

  if [ "$#" -gt 2 ]; then
    loc="$loc$(($3 + 1)):"
  fi

  errors+=("$loc $2")
}

function main () {
  process_dir "$base_dir"
  process_dir "$(cd "$base_dir/.github" && pwd -P)"

  if [ ${#errors[@]} -ne 0 ]; then
    for error in "${errors[@]}"; do
      echo "$error"
    done

    exit 1
  fi

  rm -rf "$tmp_dir"
}

function process () {
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

  tests_file_dir="$tests_dir"
  tmp_file_dir="$tmp_dir"

  if [ "$file_dir" != "." ]; then
    tests_file_dir="$tests_file_dir/$file_dir"
    tmp_file_dir="$tmp_file_dir/$file_dir"
  fi

  mkdir -p "$tmp_file_dir"

  if [ "$file_ext" == "" ]; then
    cat "$file_path" > "$tmp_file_dir/$file_name"
  else
    inside_block=false
    block=""
    i=1

    while IFS= read -r line; do
      if [ "$line" == "\`\`\`the" ]; then
        inside_block=true
      elif [[ "$line" == "\`\`\`" && "$inside_block" == true ]]; then
        test_lex_file_fullname="lex-$file_name-$i.txt"
        tmp_file_fullname="$file_name-$i"

        if [ ! -f "$tests_file_dir/$test_lex_file_fullname" ]; then
          log_error "$tests_file_dir/$test_lex_file_fullname" \
            "Lexer test does not exists"
        fi

        printf "%s" "$block" > "$tmp_file_dir/$tmp_file_fullname"
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

function process_dir () {
  for entry in "$1"/*; do
    if [ ! -f "$entry" ]; then
      process_dir "$entry"
      continue
    fi

    process "$entry"
  done
}

main "$@"
