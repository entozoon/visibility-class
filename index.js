// Is a given DOM element currently visible on screen
const isVisible = element => {
  var rect = element.getBoundingClientRect();
  var elementTop = rect.top;
  var elementBottom = rect.bottom;
  // If any part of it is onscreen at all
  return elementTop < window.innerHeight && elementBottom >= 0;
};

// As the user scrolls, toggle certain classes to allow CSS animations
const visibilityClass = selector => {
  [].forEach.call(document.querySelectorAll(selector), element => {
    element.classList.remove(isVisible(element) ? "invisible" : "visible");
    element.classList.add(isVisible(element) ? "visible" : "invisible");
  });
};

export default visibilityClass;
