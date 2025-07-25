
(function () {
          'use strict'
          var forms = document.querySelectorAll('.needs-validation')
          Array.prototype.slice.call(forms)
            .forEach(function (form) {
              form.addEventListener('submit', function (event) {
                event.preventDefault()
                event.stopPropagation()
                if (form.checkValidity()) {
                  alert('Message sent successfully!');
                  form.reset();
                }
                form.classList.add('was-validated')
              }, false)
            })
        })()


