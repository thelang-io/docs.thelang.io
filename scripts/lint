#!/usr/bin/env bash

errors=()

function log_error () {
  loc="$1:"

  if [ "$#" -gt 2 ]; then
    loc="$loc$(($3 + 1)):"
  fi

  errors+=("$loc $2")
}

function main () {
  process_dir "$(cd "$(dirname "$0")/.." && pwd -P)"
  process_dir "$(cd "$(dirname "$0")/../.github" && pwd -P)"

  if [ ${#errors[@]} -ne 0 ]; then
    for error in "${errors[@]}"; do
      echo "$error"
    done

    exit 1
  fi
}

function process () {
  filepath="$1"
  last_line=""
  i=0

  while IFS= read -r line; do
    line_len="${#line}"

    if [ "$line_len" -ge 80 ]; then
      log_error "$filepath" "line length should not exceed 80 characters" $i
    fi

    if [ "$line_len" -ge 1 ]; then
      first_char="${line:0:1}"
      last_char="${line:((line_len - 1)):1}"

      if [ "$last_char" == $'\r' ]; then
        log_error "$filepath" "line terminator should be LF" $i
      fi

      if [ "$first_char" == $'\t' ]; then
        log_error "$filepath" "line should not start with tab" $i
      fi

      if [ "$last_char" == $'\t' ] || [ "$last_char" == " " ]; then
        log_error "$filepath" "line should not end with whitespace" $i
      fi

      if [ "$first_char" == " " ]; then
        j=1

        for (( ; j < line_len; j++ )); do
          if [ "${line:$j:1}" != " " ]; then
            break
          fi
        done

        if [ $((j % 2)) -ne 0 ]; then
          log_error "$filepath" "line indentation should be 2 spaces" $i
        fi
      fi
    fi

    last_line="$line"
    ((i++))
  done < "$1"

  if [ "$i" -ne 0 ] && [ "$last_line" == "" ]; then
    log_error "$filepath" "file should end with only one line break" $i
  fi
}

function process_dir () {
  for entry in "$1"/*; do
    if [ ! -f "$entry" ]; then
      process_dir "$entry"
      continue
    elif [ "$(basename "$entry")" == "LICENSE.md" ]; then
      continue
    fi

    process "$entry"
  done
}

main "$@"
