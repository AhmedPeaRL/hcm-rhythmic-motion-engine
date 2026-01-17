// HCM Rhythmic Motion Engine
// Motion without decision

(function () {
  const subscribers = new Set();

  function now() {
    return performance.now();
  }

  function pulse(time) {
    subscribers.forEach(fn => {
      try {
        fn(time);
      } catch (_) {
        // silence is intentional
      }
    });
    requestAnimationFrame(pulse);
  }

  function allow(fn) {
    if (typeof fn === 'function') {
      subscribers.add(fn);
    }
  }

  function disallow(fn) {
    subscribers.delete(fn);
  }

  requestAnimationFrame(pulse);

  window.HCM_RHYTHM = Object.freeze({
    allow,
    disallow,
    now
  });
})();
