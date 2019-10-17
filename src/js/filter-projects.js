/*
* Filter plugin init
* */
var containerEl = document.querySelector('.container-filter');
var mixer = mixitup(containerEl);

$(document).ready(function () {

    // start with specific category
    mixer.toggleOn('.mobile-apps');

    // add active class
    $('.nav-projects li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // show and hide locked projects
    $('#toggle-lock-projects').click(function () {
        var check_box = $(this);

        if ($(check_box).is(":checked")) {
            $('.lock-projects').fadeOut('slow');

        } else {
            $('.lock-projects').fadeIn('slow');
        }
    });

});



