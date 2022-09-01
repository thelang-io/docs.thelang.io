'use strict';

(function (document) {
  const codeElements = document.querySelectorAll('code.language-the')

  const TOKEN = {
    UNKNOWN: 0,
    WS: 1,
    EOL: 2,
    COMMENT: 3,
    KW: 4,
    CHAR: 5,
    NUM: 6,
    STR: 7,
    ID: 8,
    OP: 9
  }

  function isKeyword (val) {
    return val === 'async' ||
      val === 'await' ||
      val === 'break' ||
      val === 'catch' ||
      val === 'continue' ||
      val === 'elif' ||
      val === 'else' ||
      val === 'enum' ||
      val === 'export' ||
      val === 'false' ||
      val === 'fn' ||
      val === 'from' ||
      val === 'if' ||
      val === 'import' ||
      val === 'is' ||
      val === 'loop' ||
      val === 'main' ||
      val === 'mut' ||
      val === 'nil' ||
      val === 'obj' ||
      val === 'ref' ||
      val === 'return' ||
      val === 'throw' ||
      val === 'true' ||
      val === 'try' ||
      val === 'union'
  }

  function tokIsDigit (ch) {
    return /^\d+$/.test(ch)
  }

  function tokIsId (ch) {
    return /^\w+$/.test(ch)
  }

  function tokIsIdStart (ch) {
    return /^[A-Za-z_]+$/.test(ch)
  }

  function tokIsOp (ch) {
    return /^[`!@#$%^&*()+\-=\[\]{};:\\|,.<>\/?~]+$/.test(ch)
  }

  function tokIsWs (ch) {
    return /^\s+$/.test(ch)
  }

  function tokenize (text) {
    const tokens = []

    text = text.replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')

    for (let i = 0; i < text.length; i++) {
      const startPos = i
      let type = TOKEN.UNKNOWN

      if (text[i] === '\n') {
        type = TOKEN.EOL
      } else if (tokIsWs(text[i])) {
        while (tokIsWs(text[i + 1])) i++
        type = TOKEN.WS
      } else if (tokIsIdStart(text[i])) {
        while (tokIsId(text[i + 1])) i++
        const val = text.slice(startPos, i + 1)
        type = isKeyword(val) ? TOKEN.KW : TOKEN.ID
      } else if (tokIsDigit(text[i])) {
        while (tokIsId(text[i + 1])) i++
        type = TOKEN.NUM
      } else if (text[i] === '\'') {
        i++

        for (; i < text.length; i++) {
          if (text[i] === '\'') {
            break;
          } else if (text[i] === '\\' && text[i + 1] === '\'') {
            i++
          }
        }

        type = TOKEN.CHAR
      } else if (text[i] === '"') {
        i++

        for (; i < text.length; i++) {
          if (text[i] === '"') {
            break;
          } else if (text[i] === '\\' && text[i + 1] === '"') {
            i++
          }
        }

        type = TOKEN.STR
      } else if (text[i] === '/' && text[i + 1] === '/') {
        while (i < text.length && text[i + 1] !== '\n') i++
        type = TOKEN.COMMENT
      } else if (text[i] === '/' && text[i + 1] === '*') {
        for (; i < text.length; i++) {
          if (text[i + 1] === '*' && text[i + 2] === '/') {
            i += 2
            break
          }
        }

        type = TOKEN.COMMENT
      } else if (tokIsOp(text[i])) {
        while (tokIsOp(text[i + 1])) i++
        type = TOKEN.OP
      }

      tokens.push({
        type: type,
        start: startPos,
        end: i + 1,
        value: text.slice(startPos, i + 1)
      })
    }

    return tokens
  }

  function parse (text) {
    const tokens = tokenize(text)
    let html = []
    let line = ''

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (token.type === TOKEN.EOL) {
        html.push('<div class="code__line">' + line + '</div>')
        line = ''
      } else if (token.type === TOKEN.CHAR) {
        line += '<span class="code__type-char">' + token.value + '</span>'
      } else if (token.type === TOKEN.COMMENT) {
        line += '<span class="code__type-comment">' + token.value + '</span>'
      } else if (token.type === TOKEN.ID) {
        line += '<span class="code__type-id">' + token.value + '</span>'
      } else if (token.type === TOKEN.KW) {
        line += '<span class="code__type-keyword">' + token.value + '</span>'
      } else if (token.type === TOKEN.NUM) {
        line += '<span class="code__type-number">' + token.value + '</span>'
      } else if (token.type === TOKEN.STR) {
        line += '<span class="code__type-string">' + token.value + '</span>'
      } else if (token.type === TOKEN.WS && /^ +$/g.test(token.value)) {
        line += token.value.replace(/\s+/g, (s) => {
          return Array(s.split('').length + 1).join('&nbsp;')
        })
      } else {
        line += token.value
      }

      if (i === tokens.length - 1 && line !== '') {
        html.push('<div class="code__line">' + line + '</div>')
      }
    }

    return html.join('')
  }

  for (let i = 0; i < codeElements.length; i++) {
    const codeEl = codeElements[i]

    codeEl.classList.add('code')
    codeEl.innerHTML = parse(codeEl.innerHTML)
  }
})(document)
