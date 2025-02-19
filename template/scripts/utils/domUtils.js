function getEl(selector) {
    return document.querySelector(selector)
}

function getElems(selector) {
    return document.querySelectorAll(selector)
}

function createEl(element) {
    return document.createElement(element)
}

function addClass(element, className) {
    element.classList.add(className)
}

export { getEl, getElems, createEl, addClass }