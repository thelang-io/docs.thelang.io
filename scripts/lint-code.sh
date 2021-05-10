#!/usr/bin/env bash
set -e

base_dir="$(cd "$(dirname "$0")/.." && pwd -P)"
tmp_dir="$(mktemp -d)" || exit 1

errors=()
files=()

function log_error {
  loc="$1:"

  if [ "$#" -gt 2 ]; then
    loc="$loc$(($3 + 1)):"
  fi

  errors+=("$loc $2")
}

function lex {
  file_dir="$(dirname "$1")"

#  if [ "$file_dir" == "." ]; then
#    lex_test_dir="$base_dir/tests"
#  else
#    lex_test_dir="$base_dir/tests/$file_dir"
#  fi
#
#  lex_test_file_path="$lex_test_dir/lex-$(basename "$1").txt"
#
#  if [ ! -f "$lex_test_file_path" ]; then
#    log_error "$lex_test_file_path" "LexerError: Test does not exists"
#    return
#  fi
#
#  lex_result="$(the lex "$tmp_dir/$1" 2>&1)"
#  lex_test="$(cat "$lex_test_file_path")"
#
#  if [ "$lex_result" != "$lex_test" ]; then
#    echo "Test does not match expectation"
#    echo
#    echo "$lex_result"
#    echo
#    echo "$lex_test"
#
#    exit 1
#  fi
}

function collect_file {
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

  if [ "$file_dir" == "." ]; then
    file_pathname="$file_name"
  else
    file_pathname="$file_dir/$file_name"
    mkdir -p "$tmp_dir/$file_dir"
  fi

  if [ "$file_ext" == "" ]; then
    cat "$file_path" > "$tmp_dir/$file_pathname"
    files+=("$file_pathname")
    return
  fi

  i=1

  while IFS= read -r line; do
    if [ "$line" == "\`\`\`the" ]; then
      inside_block=true
    elif [[ "$line" == "\`\`\`" && "$inside_block" == true ]]; then
      printf "%s" "$block" > "$tmp_dir/$file_pathname-$i"
      files+=("$file_pathname-$i")

      inside_block=false
      block=""
      i=$((i++))
    elif [ "$inside_block" == true ]; then
      line_with_nl="$line"$'\n'

      if [ -z "$block" ]; then
        block="$line_with_nl"
      else
        block="$block$line_with_nl"
      fi
    fi
  done < "$1"
}

function collect_files {
  for entry in "$1"/*; do
    if [ ! -f "$entry" ]; then
      collect_files "$entry"
      continue
    fi

    collect_file "$entry"
  done
}

function main {
  collect_files "$base_dir"
  collect_files "$(cd "$base_dir/.github" && pwd -P)"

  for file in "${files[@]}"; do
    lex "$file"
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
