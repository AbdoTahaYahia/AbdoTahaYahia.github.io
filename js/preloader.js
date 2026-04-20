/* ============================================
   PRELOADER — Counter Animation & Reveal
   ============================================ */

(function () {
  const preloader = document.getElementById('preloader');
  const counter = document.getElementById('preloader-counter');
  if (!preloader || !counter) return;

  let current = 0;
  const target = 100;
  const duration = 1800;
  const startTime = performance.now();

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function updateCounter(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    current = Math.floor(easedProgress * target);
    counter.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = '100';
      setTimeout(hidePreloader, 400);
    }
  }

  function hidePreloader() {
    preloader.classList.add('hidden');
    document.body.classList.remove('loading');

    // Trigger hero animations after preloader hides
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('preloaderDone'));
    }, 600);
  }

  // Start counter animation
  requestAnimationFrame(updateCounter);

  // Fallback: force hide after 4 seconds
  setTimeout(() => {
    if (!preloader.classList.contains('hidden')) {
      hidePreloader();
    }
  }, 4000);
})();
