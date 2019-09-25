// Is a given DOM element currently visible on screen
const isVisible = element => {
  var rect = element.getBoundingClientRect();
  var elementTop = rect.top;
  var elementBottom = rect.bottom;
  // If any part of it is onscreen at all
  return elementTop < window.innerHeight && elementBottom >= 0;
};

let vcAnimationFrame;
let vcSelectors = [];

const setVisibilityClasses = () => {
  const selectors = vcSelectors.join(",");
  [].forEach.call(document.querySelectorAll(selectors), element => {
    element.classList.remove(isVisible(element) ? "invisible" : "visible");
    element.classList.add(isVisible(element) ? "visible" : "invisible");
  });
  vcAnimationFrame = window.requestAnimationFrame(setVisibilityClasses);
};

// As the user scrolls, toggle certain classes to allow CSS animations
const visibilityClass = selector => {
  // Queue selector sets up, in case users instantiate it multiple times
  vcSelectors.push(selector);
  window.cancelAnimationFrame(vcAnimationFrame);
  vcAnimationFrame = window.requestAnimationFrame(setVisibilityClasses);
};

export default visibilityClass;
