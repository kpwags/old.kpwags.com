$(document).ready(function() {
    $('#menu-link').click(function() {
        if ($('.mobile-categories ul').css('display') == 'none') {
            $('.mobile-categories ul').slideDown();
        } else {
            $('.mobile-categories ul').slideUp();
        }
    });

    $('ul.album-list li').click(function() {
        var url = $(this).attr('data-url');
        window.location.href = url;
    });
});