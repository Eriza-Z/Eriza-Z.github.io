const scriptURL = 'https://script.google.com/macros/s/AKfycbwDFQ3u2CaMDH4iwjTxQiO-wQTMkrJAeEWfsy7pi7rPYHaSdWo1HCGFIdj_sksrGp8flA/exec'
    const form = document.forms['erizazg-contact-form'];
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const formAlert = document.querySelector('.form-alert');

    form.addEventListener('submit', e => {
      e.preventDefault();
      // Ketika di klik, tampilkan tombol loading.
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          // Ketika terkirim, tampilkan tombol kirim
          btnLoading.classList.toggle('d-none');
          btnKirim.classList.toggle('d-none');
          // Alert
          formAlert.classList.toggle('d-none');
          // For Resetting The Form
          form.reset()
          console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
    })