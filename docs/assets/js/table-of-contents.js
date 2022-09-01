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
    h1El.parentNode.insertBefore(wrapperEl.children[0], h1El.nextSibling)
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
