$(document).ready(function() {
    $(window).on("scroll", function() {
        var headerTop = $('h1').offset().top;
        var stickyHeader = $('#sticky-header');

        if ($(window).scrollTop() > headerTop) {
            stickyHeader.fadeIn();
        } else {
            stickyHeader.fadeOut();
        }
    });
});