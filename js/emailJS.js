emailjs.init('DaTM_GydmK934LWAm'); //pub key
        
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (this.checkValidity()) {
                const btn = this.querySelector('button[type="submit"]');
                btn.textContent = 'Sending...';
                btn.disabled = true;
                
                const templateParams = {
                    from_name: document.getElementById('name').value,
                    from_email: document.getElementById('email').value,
                    mobile: document.getElementById('mobile').value,
                    message: document.getElementById('message').value
                };
                
                emailjs.send('service_vf4qmrt', 'template_lebp55q', templateParams)
                    .then(() => {
                        alert('Message sent successfully!');
                        this.reset();
                    })
                    .catch(() => {
                        alert('Failed to send message. Please try again.');
                    })
                    .finally(() => {
                        btn.textContent = 'Send Message';
                        btn.disabled = false;
                    });
            } else {
                this.classList.add('was-validated');
            }
        });