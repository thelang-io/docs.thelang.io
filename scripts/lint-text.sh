#!/usr/bin/env bash

#
# Copyright (c) 2021-present Aaron Delasy
#

set -e

base_dir="$(cd "$(dirname "$0")/.." && pwd -P)"
errors=()

function log_error {
  loc="$1:"

  if [ "$#" -gt 2 ]; then
    loc="$loc$(($3 + 1)):"
  fi

  errors+=("$loc $2")
}

function process_file {
  file_path="$1"
  last_line=""
  i=0

  while IFS= read -r line || [ -n "$line" ]; do
    line_len="${#line}"

    if [ "$line_len" -ge 80 ]; then
      log_error "$file_path" "line length should not exceed 80 characters" $i
    fi

    if [ "$line_len" -ge 1 ]; then
      first_char="${line:0:1}"
      last_char="${line:((line_len - 1)):1}"

      if [ "$last_char" == $'\r' ]; then
        log_error "$file_path" "line terminator should be LF" $i
      fi

      if [ "$first_char" == $'\t' ]; then
        log_error "$file_path" "line should not start with tab" $i
      fi

      if [ "$last_char" == $'\t' ] || [ "$last_char" == " " ]; then
        log_error "$file_path" "line should not end with whitespace" $i
      fi

      if [ "$first_char" == " " ]; then
        j=1

        for (( ; j < line_len; j++ )); do
          if [ "${line:$j:1}" != " " ]; then
            break
          fi
        done

        if [ $((j % 2)) -ne 0 ]; then
          log_error "$file_path" "line indentation should be 2 spaces" $i
        fi
      fi
    fi

    last_line="$line"
    i=$((i + 1))
  done < "$1"

  if [ "$i" -ne 0 ] && [ "$last_line" == "" ]; then
    log_error "$file_path" "file should end with only one line break" "$i"
  elif [ "$(tail -c 1 "$1")" != "" ]; then
    log_error "$file_path" "file should end with a line break" "$i"
  fi
}

function process_files {
  for entry in "$1"/*; do
    file_fullname="$(basename "$entry")"

    if [ ! -f "$entry" ]; then
      process_files "$entry"
      continue
    elif [ "$file_fullname" == "LICENSE.txt" ]; then
      continue
    elif [ "$file_fullname" == "Gemfile.lock" ]; then
      continue
    elif git check-ignore "$entry" > /dev/null; then
      continue
    fi

    process_file "$entry"
  done
}

function main {
  process_files "$base_dir"
  process_files "$(cd "$base_dir/.github" && pwd -P)"

  if [ ${#errors[@]} -ne 0 ]; then
    for error in "${errors[@]}"; do
      echo "$error" 1>&2
    done

    exit 1
  fi
}

main "$@"
