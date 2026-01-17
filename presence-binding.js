// Presence Binding Layer
// No instruction is sent to Presence

(function () {
  const root = document.documentElement;

  function rhythmicDrift(t) {
    const drift = Math.sin(t / 6000) * 0.5 + 0.5;
    root.style.setProperty('--presence-drift', drift.toFixed(4));
  }

  if (window.HCM_RHYTHM) {
    window.HCM_RHYTHM.allow(rhythmicDrift);
  }
})();
