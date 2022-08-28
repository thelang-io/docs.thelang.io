/* global defaultSearchDescription */

'use strict';

(function (document, window) {
  function isNil (test) {
    return typeof test === 'undefined' || test === null
  }

  function base64Decode (str) {
    return decodeURIComponent(atob(str).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }

  const searchEl = document.getElementById('search')
  const searchModalEl = document.querySelector('.search-modal')
  const searchModalInputEl = document.getElementById('searchModalInput')
  const searchModalCancelEl = document.getElementById('searchModalCancel')
  const searchModalItemsEl = document.querySelector('.search-modal__items')

  let searching = false
  let searchQuery = null

  function hideSearchModal () {
    searchModalEl.style.display = ''
    document.body.style.overflow = ''
  }

  function showSearchModal () {
    searchModalEl.style.display = 'flex'
    document.body.style.overflow = 'hidden'

    setTimeout(() => searchModalInputEl.focus(), 0)
  }

  async function extractDocMarkdownInfo (searchItem) {
    const res = await fetch(searchItem.url)
    const data = await res.json()
    const content = base64Decode(data.content)
    const frontMatter = content.slice(4, content.slice(4).indexOf('---\n') + 4)
    const frontMatterParsed = frontMatter.split('\n').filter(it => it !== '')

    let title = null
    let description = defaultSearchDescription

    for (let i = 0; i < frontMatterParsed.length; i++) {
      const parts = frontMatterParsed[i].split(':')

      if (parts[0] === 'title') {
        title = parts[1].trim()
      } else if (parts[0] === 'description') {
        description = parts[1].trim()
      }
    }

    return title === null ? null : {
      url: searchItem.path.slice(4, -3),
      title: title,
      description: description
    }
  }

  async function performDocsSearch () {
    searchModalItemsEl.innerHTML =
      '<div class="search-modal__body-text">Loading...</div>'

    const q = encodeURIComponent(
      searchQuery +
      ' language:markdown' +
      ' path:/docs/' +
      ' repo:thelang-io/docs.thelang.io'
    )

    const url = 'https://api.github.com/search/code?per_page=20&q=' + q
    searchQuery = null

    const res = await fetch(url, {
      headers: {
        accept: 'application/vnd.github.text-match+json'
      }
    })

    const data = await res.json()

    if (data.items.length === 0) {
      searchModalItemsEl.innerHTML =
        '<div class="search-modal__body-text">No results for this query</div>'
    } else {
      const html = await Promise.all(
        data.items.slice(0, 10).map(async (item) => {
          const itemInfo = await extractDocMarkdownInfo(item)

          if (itemInfo === null) {
            return null
          }

          return '<a class="search-modal__item" href="' +
            itemInfo.url + '.html">' +
            '<div class="search-modal__item-headline">' +
            itemInfo.title + '</div>' +
            '<p class="search-modal__item-subtitle">' +
            itemInfo.description + '</p>' +
            '</a>'
        })
      )

      searchModalItemsEl.innerHTML = html.filter((it) => it !== null).join('')
    }
  }

  async function searchDocs (query) {
    if (!isNil(query)) {
      searchQuery = query
    }

    if (searching) {
      return
    }

    const startTime = Date.now()

    searching = true
    await performDocsSearch()

    const endTime = Date.now()
    const deltaTime = 1000 - (endTime + startTime)

    if (deltaTime > 0) {
      await new Promise((resolve) => {
        setTimeout(resolve, deltaTime)
      })
    }

    searching = false

    while (searchQuery !== null) {
      await searchDocs()
    }
  }

  if (!isNil(searchModalCancelEl)) {
    searchModalCancelEl.addEventListener('click', function (e) {
      e.preventDefault()
      hideSearchModal()
    })
  }

  if (
    !isNil(searchEl) &&
    !isNil(searchModalEl) &&
    !isNil(searchModalItemsEl) &&
    !isNil(searchModalInputEl)
  ) {
    searchEl.form.addEventListener('submit', function (e) {
      e.preventDefault()
    })

    searchModalInputEl.form.addEventListener('submit', function (e) {
      e.preventDefault()
    })

    searchEl.addEventListener('focus', function (e) {
      if (e.currentTarget.value !== '') {
        showSearchModal()
      }
    })

    searchEl.addEventListener('input', function (e) {
      searchModalInputEl.value = e.currentTarget.value
      showSearchModal()
      return searchDocs(e.currentTarget.value)
    })

    searchModalInputEl.addEventListener('input', function (e) {
      searchEl.value = e.currentTarget.value
      return searchDocs(e.currentTarget.value)
    })
  }
})(document, window)
