const preloader = document.getElementById('preloader');

window.addEventListener('load', function() {
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 2500);
});