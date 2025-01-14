window.addEventListener('load', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && !location.pathname.endsWith('login.html')) {
        window.location.href = 'login.html';
    }
});
