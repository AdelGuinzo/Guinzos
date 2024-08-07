document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const loading = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');
    const sentMessage = document.querySelector('.sent-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Show loading indicator
      loading.style.display = 'block';
      errorMessage.style.display = 'none';
      sentMessage.style.display = 'none';
  
      // Collect form data
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        loading.style.display = 'none';
        if (data.success) {
          sentMessage.style.display = 'block';
          form.reset();
        } else {
          errorMessage.textContent = data.message;
          errorMessage.style.display = 'block';
        }
      })
      .catch(error => {
        loading.style.display = 'none';
        errorMessage.textContent = 'An error occurred. Please try again.';
        errorMessage.style.display = 'block';
      });
    });
  });
  