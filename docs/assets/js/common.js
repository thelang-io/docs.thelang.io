'use strict';

(function (document, window) {
  var windowUrl = window.location.href
  var headNavItemLinkElements = document.querySelectorAll('.header-nav__item-link')

  for (var i = 0; i < headNavItemLinkElements.length; i++) {
    var headNavItemLinkElement = headNavItemLinkElements[i]

    if (windowUrl.startsWith(headNavItemLinkElement.href)) {
      var parent = headNavItemLinkElement.parentNode
      parent.classList.add(parent.className + '--active')
    }
  }
})(document, window)
