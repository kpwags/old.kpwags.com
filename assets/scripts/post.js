$(document).ready(function() {
    $('.post .text a').each(function() {
        var href = $(this).prop('href');
        var text = $(this).text();

        if (href.indexOf('kpwags.com') < 0 && href.indexOf('127.0.0.1') < 0 && href.substring(0, 1) != '/') {
            $(this).prop('target', '_blank');
            $(this).prop('rel', 'noopener');
        }
    });
});