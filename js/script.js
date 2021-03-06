var elem = document.querySelector('.main-carousel');

var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    hash: true
});

var btnRestart = document.querySelector('.restart-button');
btnRestart.addEventListener('click', function () {
    flkty.select(0);
});
var progressBar = document.querySelector('.progress-bar');
flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});