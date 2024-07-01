document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        document.getElementById('newsletter-form').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});
