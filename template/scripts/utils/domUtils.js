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

function removeClass(element, className) {
    element.classList.remove(className)
}

export { getEl, getElems, createEl, addClass, removeClass }