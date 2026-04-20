/* ============================================
   ANIMATIONS — GSAP ScrollTrigger + Hero
   ============================================ */

(function () {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // ── Hero Animations (after preloader) ──
  function playHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Name reveal - lines sliding up
    tl.to('.hero-name .line-inner', {
      y: 0,
      duration: 1.2,
      stagger: 0.15,
    })
    .to('.hero-label', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.6')
    .to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.4')
    .to('.hero-tagline', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.4')
    .to('.hero-cta', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.4')
    .to('.hero-scroll', {
      opacity: 1,
      duration: 1,
    }, '-=0.2');
  }

  window.addEventListener('preloaderDone', playHeroAnimations);

  // Fallback if preloader event doesn't fire
  setTimeout(() => {
    if (document.querySelector('.hero-name .line-inner') &&
        gsap.getProperty('.hero-name .line-inner', 'y') !== 0) {
      playHeroAnimations();
    }
  }, 5000);

  // ── Scroll Reveal Animations ──
  const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        }
      }
    );
  });

  // ── Skill Bars Animation ──
  const skillBars = document.querySelectorAll('.skill-bar');

  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.to(bar, {
      width: width + '%',
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bar,
        start: 'top 90%',
        once: true,
      }
    });
  });

  // ── Stat Counters ──
  const statNumbers = document.querySelectorAll('.about-stat-number');

  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));

    gsap.to(stat, {
      textContent: target,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: stat,
        start: 'top 85%',
        once: true,
      },
      onUpdate: function () {
        stat.textContent = Math.ceil(parseFloat(stat.textContent));
      },
      onComplete: function () {
        stat.textContent = target + '+';
      }
    });
  });

  // ── Education Timeline Stagger ──
  const eduItems = document.querySelectorAll('.education-item');

  gsap.fromTo(eduItems,
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.education-timeline',
        start: 'top 80%',
        once: true,
      }
    }
  );

  // ── Skill Category Stagger ──
  const skillCards = document.querySelectorAll('.skill-category');

  gsap.fromTo(skillCards,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%',
        once: true,
      }
    }
  );

  // ── Contact Links Stagger ──
  const contactLinks = document.querySelectorAll('.contact-link');

  gsap.fromTo(contactLinks,
    { opacity: 0, x: -20 },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-links',
        start: 'top 85%',
        once: true,
      }
    }
  );

  // ── Parallax for Hero Gradients ──
  gsap.to('.hero-gradient', {
    y: -100,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  });

  gsap.to('.hero-gradient-2', {
    y: -60,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  });

})();
