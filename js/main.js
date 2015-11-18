
$.getJSON("http://www.geoplugin.net/json.gp?jsoncallback=?",function(json){


    $('#city').val(json.geoplugin_city);
    $('#state').val(json.geoplugin_regionName);
    $('#country').val(json.geoplugin_countryName);


});
$(window).load(function(){



    $('input').blur(function(event) {
        var inputVal = this.value;

        if (inputVal) {
            this.classList.add('value-exists');
        } else {
            this.classList.remove('value-exists');
        }
    });

    // Smooth Scroll Function

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

    // Input animation

    (function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
            // in case the input is already filled..
            if( inputEl.value.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'input--filled' );
            }

            // events:
            inputEl.addEventListener( 'focus', onInputFocus );
            inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
            classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
            if( ev.target.value.trim() === '' ) {
                classie.remove( ev.target.parentNode, 'input--filled' );
            }
        }
    })();

    // Select animation

    (function() {
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
            new SelectFx(el);
        } );
    })();

    // Stop anchors from refreshing the page

    $("a").click(function(e) {
        e.preventDefault();
    });

    // Init register gallery

    var $gallery = $('.gallery');

    // Register gallery continue

    $('.registerNav').on( 'click', function() {
        $gallery.flickity('next');
    });

//$.stellar({
//        horizontalScrolling: false,
//        verticalOffset: 40
//    });

    function validateForm1() {
        var title = document.forms["myForm"]["fname"].value;
        if (x == null || x == "") {
            alert("Name must be filled out");
            return false;
        }
    }



});
