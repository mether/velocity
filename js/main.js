//$('input').blur(function(event) {
//    var inputVal = this.value;
//
//    if (inputVal) {
//        this.classList.add('value-exists');
//    } else {
//        this.classList.remove('value-exists');
//    }
//});

$(window).load(function(){



    $('a[href*=#]:not([href=#]):not([href=#myCarousel])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 70
                }, 500);
                return false;
            }
        }
    });


    $("a").click(function(e) {
        e.preventDefault();
    });

    var $gallery = $('.gallery');

    $('.registerNav').on( 'click', function() {
        $gallery.flickity('next');
    });

});
