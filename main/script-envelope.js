document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const redirectUrl = 'index.html'; // Replace with your target URL

    book.addEventListener('click', function() {
        book.classList.add('open');

        // Wait for the animation to complete before redirecting
        setTimeout(function() {
            window.location.href = redirectUrl;
        }, 1000); // Duration should match the CSS transition duration
    });
});
