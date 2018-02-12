/*!
 * Buide a Tribute Page - Free Code Camp Project
 * Jose Febrero - http://febrero.info
 * Copyright 2018
 */

/*jslint browser: true*/
/* eslint-env browser */
/*global jQuery, alert*/

(function ($) {
    "use strict"; // Start of use strict
    
    // Activate ScrollRevealJS effect
    $(document).ready(function () {
        window.sr = new ScrollReveal();
        window.sr.reveal('#options', { duration: 1500 }, 50);
        window.sr.reveal('#video', { duration: 1500 }, 50);
        window.sr.reveal('#covers', { duration: 1500 }, 50);
        window.sr.reveal('#links', { duration: 1500 }, 50);
    });
    
    // Activate page scrolling feature
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    // Activate bootstrap tooltip
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    
    // Activate scroll to top feature
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#uptop').fadeIn();
            } else {
                $('#uptop').fadeOut();
            }
        });
        $('#uptop').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 700);
            return false;
        });
    });
    
    // Display current year in footer
    $('#year').html(new Date().getFullYear());
    
}(jQuery)); // End of use strict