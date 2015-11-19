
$.getJSON("http://www.geoplugin.net/json.gp?jsoncallback=?",function(json){


    $('#city').val(json.geoplugin_city);
    $('#state').val(json.geoplugin_regionName);
    $('#country').val(json.geoplugin_countryName);

    console.log(json);


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

    //$("a").click(function(e) {
    //    e.preventDefault();
    //});

    // Init register gallery



    // Register gallery continue



//$.stellar({
//        horizontalScrolling: false,
//        verticalOffset: 40
//    });






});
function validateForm1() {
    $('.registerNav').on( 'click', function() {
        if($('#fname').val() && $('#lname').val()){
            var $gallery = $('.gallery');
            $gallery.flickity('select', 1);
        } else {
            console.log('nope');
            if(!$('#fname').val()) {
                $('#fname+.input__label--ruri').addClass('invalid');
            }
            if(!$('#lname').val()) {
                $('#lname+.input__label--ruri').addClass('invalid');
            }
        }
    });
}
function validateForm2() {
    $('.registerNav').on( 'click', function() {
        if($('#address').val() && $('#city').val() && $('#post').val() && $('#state').val() && $('#country').val() && $('#email').val() && $('#phone').val()){
            var $gallery = $('.gallery');
            $gallery.flickity('select', 2);
        } else {
            console.log('nope');

            if(!$('#address').val()) {
                $('#address+.input__label--ruri').addClass('invalid');
            }
            if(!$('#city').val()) {
                $('#city+.input__label--ruri').addClass('invalid');
            }
            if(!$('#post').val()) {
                $('#post+.input__label--ruri').addClass('invalid');
            }
            if(!$('#state').val()) {
                $('#state+.input__label--ruri').addClass('invalid');
            }
            if(!$('#country').val()) {
                $('#country+.input__label--ruri').addClass('invalid');
            }
            if(!$('#email').val()) {
                $('#email+.input__label--ruri').addClass('invalid');
            }
            if(!$('#phone').val()) {
                $('#phone+.input__label--ruri').addClass('invalid');
            }

        }
    });
}
function validateForm3() {
    $('.registerNav').on( 'click', function() {
        if(($('#bday').val() && $('#bmonth').val() && $('#byear').val() && $('#pass').val() && $('#passC').val() && $('#secA').val()) && ($('#pass').val() == $('#passC').val())){
            var $gallery = $('.gallery');
            $gallery.flickity('select', 3);

            $('#cName').val($('#fname').val() + ' ' + $('#lname').val());
            $('#cAdd').val($('#address').val() + ' ' + $('#city').val() + ' ' + $('#post').val() + ' ' + $('#state').val() + ' ' + $('#country').val());
            $('#cEmail').val($('#email').val());
            $('#cPhone').val($('#phone').val());
            $('#cBirth').val($('#bday').val() + '/' + $('#bmonth').val() + '/' + $('#byear').val());


        } else {
            console.log('nope');

            if(!$('#bday').val()) {
                $('#bday+.input__label--ruri').addClass('invalid');
            }
            if(!$('#bmonth').val()) {
                $('#bmonth+.input__label--ruri').addClass('invalid');
            }
            if(!$('#byear').val()) {
                $('#byear+.input__label--ruri').addClass('invalid');
            }
            if(!$('#pass').val()) {
                $('#pass+.input__label--ruri').addClass('invalid');
            }
            if(!$('#passC').val()) {
                $('#passC+.input__label--ruri').addClass('invalid');
            }
            if(!$('#secA').val()) {
                $('#secA+.input__label--ruri').addClass('invalid');
            }
            if(!$('#phone').val()) {
                $('#phone+.input__label--ruri').addClass('invalid');
            }

            if($('#pass').val() != $('#passC').val()){
                $('#pass ').css('color', 'red');
                $('#passC').css('color', 'red');
            }
        }
    });
}
function validateForm4() {
    $('.registerNav').on( 'click', function() {
        if($('#terms').is(':checked')){
            var $gallery = $('.gallery');
            $gallery.flickity('select', 4);
        } else {
            console.log('nope');
        }
    });
}
