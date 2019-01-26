    var templateSlide = document.getElementById('template-carousel').innerHTML;
    var carousel = document.querySelector('.main-carousel');

    Mustache.parse(templateSlide);
    var renderedTemplates = '';

    for (var i = 0; i < data.length; i++) {
        renderedTemplates += Mustache.render(templateSlide, data[i]);
    }
    carousel.innerHTML = renderedTemplates;

    var elem = document.querySelector('.main-carousel');

    var flkty = new Flickity(elem, {
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


    window.initMap = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: data[0].coords
        });

        var markers = [];

        for (let i = 0; i < data.length; i++) {
            markers[i] = new google.maps.Marker({
                position: data[i].coords,
                map: map

            });
        }
    }