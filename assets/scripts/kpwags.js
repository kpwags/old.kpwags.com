$(document).ready(function() {
    $('#menu-link').click(function() {
        if ($('.mobile-categories ul').css('display') === 'none') {
            $('.mobile-categories ul').slideDown();
        } else {
            $('.mobile-categories ul').slideUp();
        }
    });

    $('ul.album-list li, .photography .most-recent .image').click(function() {
        var url = $(this).attr('data-url');
        window.location.href = url;
    });

    $('a').each(function() {
        var href = $(this).prop('href');
        var text = $(this).text();

        if (href.indexOf('kpwags.com') < 0 && href.indexOf('127.0.0.1') < 0 && href.substring(0, 1) !== '/') {
            $(this).prop('target', '_blank');
            $(this).prop('rel', 'noopener');
        }
    });
});