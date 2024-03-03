document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.addEventListener('copy', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.addEventListener('cut', function (e) {
    e.preventDefault();
    e.stopPropagation();
});

function toogle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
}
