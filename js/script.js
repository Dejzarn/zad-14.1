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