/*!
 * Personal Portfolio - Free Code Camp Project
 * Jose Febrero - http://febrero.info
 * Copyright 2018
 */

/*jslint browser: true*/
/* eslint-env browser */
/*global jQuery, alert*/

(function ($) {
    "use strict"; // Start of use strict
    
    // Activate ScrollRevealJS effect
    window.sr = new ScrollReveal();
    window.sr.reveal('#introduction-details', { duration: 1500 }, 50);
    window.sr.reveal('#project-details', { duration: 1500 }, 50);
    window.sr.reveal('#about-details', { duration: 1500 }, 50);
    window.sr.reveal('#skills-details', { duration: 1500 }, 50);
    window.sr.reveal('#contact-details', { duration: 1500 }, 50);

    // Activate page scrolling feature
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Activate slide menu fade when open
    $('[data-toggle="slide-collapse"]').on('click', function () {
        $('.navmenu').fadeIn(250);
        $('.navmenu').css("display", "block");
    });
        
    // Unfade slide menu when close
    $('.navmenu').on('click', function () {
        $('.navmenu').css("display", "none");
        $('.navbar-collapse').css("display", "none");
        $(".navmenu").removeAttr('style');
    });

    // Activate bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Closes responsive menu when a link is clicked
    $(document).on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    // Activate onclick on projects on ios
    $(document).ready(function () {
        $('.containerfade').attr("onClick", "return true");
    });
    
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainnav',
        offset: 54
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
        if ($("#mainnav").offset().top > 100) {
            $("#mainnav").addClass("navbar-shrink");
        } else {
            $("#mainnav").removeClass("navbar-shrink");
        }
    });
    
    // Activate scroll to top feature
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
    
    // Mobile menu slide from the left
    $('[data-toggle="slide-collapse"]').on('click', function () {
        var $navMenuCont = $($(this).data('target'));
        $navMenuCont.animate({'width': 'toggle'}, 250);
    });
    
    // Display current year in footer
    $('#year').html(new Date().getFullYear());
    
}(jQuery)); // End of use strict