document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    // Compose mailto URL
    var mailtoUrl = 'mailto:surenkumar13579@gmail.com' +
                    '?subject=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
  
    // Open default email client
    window.location.href = mailtoUrl;
  });
  