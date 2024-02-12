function showLoader() {
    document.getElementById('loader').style.display = "block";

    setTimeout(function () {
        window.location.href = '../principal/index.html';
    }, 3000);
}
