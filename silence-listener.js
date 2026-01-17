// Silence Listener
// Observes without responding

(function () {
  function observe() {
    // intentionally empty
  }

  [
    'mousemove',
    'scroll',
    'click',
    'keydown',
    'touchstart'
  ].forEach(evt => {
    window.addEventListener(evt, observe, { passive: true });
  });
})();
