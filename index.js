"use strict";
exports.__esModule = true;
// Is a given DOM element currently visible on screen
var isVisible = function (element) {
    var rect = element.getBoundingClientRect();
    var elementTop = rect.top;
    var elementBottom = rect.bottom;
    // If any part of it is onscreen at all
    return elementTop < window.innerHeight && elementBottom >= 0;
};
var vcAnimationFrame;
var vcSelectors = [];
var setVisibilityClasses = function () {
    var selectors = vcSelectors.join(",");
    [].forEach.call(document.querySelectorAll(selectors), function (element) {
        element.classList.remove(isVisible(element) ? "invisible" : "visible");
        element.classList.add(isVisible(element) ? "visible" : "invisible");
    });
    vcAnimationFrame = window.requestAnimationFrame(setVisibilityClasses);
};
// As the user scrolls, toggle certain classes to allow CSS animations
var visibilityClass = function (selector) {
    // Queue selector sets up, in case users instantiate it multiple times
    vcSelectors.push(selector);
    window.cancelAnimationFrame(vcAnimationFrame);
    vcAnimationFrame = window.requestAnimationFrame(setVisibilityClasses);
};
exports["default"] = visibilityClass;
