/* ============================================
   Contact Form — EmailJS Integration
   ============================================ */

(function () {
  emailjs.init('ewuBBAxdYWmIeoHIm');

  const form = document.getElementById('contact-form');
  const submitBtn = form.querySelector('.btn-submit');
  const originalBtnText = submitBtn.innerHTML;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Disable button & show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="btn-spinner"></span>';
    submitBtn.classList.add('btn-loading');

    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;

    const templateParams = {
      title: 'Portfolio Contact',
      name: name,
      email: email,
      message: 'From: ' + email + '\n\n' + message,
    };

    emailjs.send('service_eli7fjo', 'template_05i2yrh', templateParams)
      .then(function () {
        // Success
        submitBtn.classList.remove('btn-loading');
        submitBtn.classList.add('btn-success');
        submitBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Sent!';
        form.reset();

        setTimeout(function () {
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-success');
          submitBtn.innerHTML = originalBtnText;
        }, 3000);
      })
      .catch(function (error) {
        // Error
        console.error('EmailJS error:', error);
        submitBtn.classList.remove('btn-loading');
        submitBtn.classList.add('btn-error');
        submitBtn.innerHTML = '✕ Failed, try again';

        setTimeout(function () {
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-error');
          submitBtn.innerHTML = originalBtnText;
        }, 3000);
      });
  });
})();
