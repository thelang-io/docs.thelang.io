'use strict';

(function (document) {
  const pageLayoutContentEl = document.querySelector('.page-layout__content')

  if (pageLayoutContentEl === null) {
    return
  }

  const h1El = pageLayoutContentEl.querySelector('h1')
  const h2Elements = pageLayoutContentEl.querySelectorAll('h2')

  if (h1El === null || h1El.nextSibling === null || h2Elements.length === 0) {
    return
  }

  function tableOfContents (data) {
    const sectionsHTML = data.map((item) => {
      return '<li class="table-of-contents__item">' +
        '<a class="table-of-contents__item-link" href="' + item.href + '">' + item.text + '</a>' +
        '</li>'
    })

    const wrapperEl = document.createElement('div')
    wrapperEl.innerHTML = '<div class="table-of-contents">' +
      '<div class="table-of-contents__headline">In this article</div>' +
      '<ul class="table-of-contents__items">' +
      sectionsHTML.join('') +
      '</ul>' +
      '</div>'

    const rootEl = wrapperEl.children[0]
    const parentEl = h1El.parentNode

    function tableOfContentsScroll () {
      const parentRect = parentEl.getBoundingClientRect()
      const bottom = Math.floor(parentRect.bottom) > window.innerHeight
        ? 24
        : window.innerHeight + 32 - Math.floor(parentRect.bottom)
      const top = Math.floor(parentRect.top) < 24 ? 24 : Math.floor(parentRect.top)

      rootEl.style.bottom = bottom + 'px'
      rootEl.style.top = top + 'px'
    }

    document.addEventListener('scroll', tableOfContentsScroll, true)
    parentEl.insertBefore(rootEl, h1El.nextSibling)
    tableOfContentsScroll()
  }

  const data = []

  for (let i = 0; i < h2Elements.length; i++) {
    const h2El = h2Elements[i]

    data.push({
      href: '#' + h2El.id,
      text: h2El.innerText
    })
  }

  tableOfContents(data)
})(document)
