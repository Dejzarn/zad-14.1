    // mustache

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

    function initMap() {
        var wijkaanzee = {
            lat: 52.491,
            lng: 4.596
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: wijkaanzee
        });
        var marker = new google.maps.Marker({
            position: wijkaanzee,
            map: map
        });
    }