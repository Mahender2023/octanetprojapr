document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.querySelector('input[type="email"]').value;
    console.log('Subscribed with email: ' + email);

  });
  