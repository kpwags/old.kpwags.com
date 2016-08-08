$(document).ready(function() {
    $('#menu-link').click(function() {
        if ($('.mobile-categories ul').css('display') == 'none') {
            $('.mobile-categories ul').slideDown();
        } else {
            $('.mobile-categories ul').slideUp();
        }
    });

    $('#share-twitter').click(function() {
        var title = $(this).attr('data-title');
        var url = $(this).attr('data-url');
        shareViaTwitter(title, url);
    });

    $('#share-facebook').click(function() {
        var title = $(this).attr('data-title');
        var url = $(this).attr('data-url');
        shareViaFacebook(title, url);
    });

    $('#share-google').click(function() {
        var url = $(this).attr('data-url');
        shareViaGoogle(url);
    });
});

function shareViaTwitter(title, postUrl) {
    if (typeof postUrl === "undefined" || postUrl == "") {
        postUrl = window.location.href;
    }

    var url = "https://twitter.com/intent/tweet?text=" + title + "&url=" + postUrl + "&via=kpwags";

    window.open(url, "shareontwitter", "width=600,height=250,location=0");
}

function shareViaFacebook(title, postUrl) {
    if (typeof postUrl === "undefined" || postUrl == "") {
        postUrl = window.location.href;
    }

    var url = "https://www.facebook.com/sharer/sharer.php?u=" + postUrl + "&t=" + title;

    window.open(url, "shareontwitter", "width=600,height=350,location=0");
}

function shareViaGoogle(postUrl) {
    if (typeof postUrl === "undefined" || postUrl == "") {
        postUrl = window.location.href;
    }

    var url = "https://plus.google.com/share?url=" + postUrl;

    window.open(url, "shareontwitter", "width=600,height=350,location=0");
}

/*
<ul class="share-buttons">
  <li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.kpwags.com&t=KPWAGS" title="Share on Facebook" target="_blank"><img src="images/simple_icons_black/Facebook.png"></a></li>
  <li><a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fwww.kpwags.com&text=KPWAGS:%20http%3A%2F%2Fwww.kpwags.com&via=kpwags" target="_blank" title="Tweet"><img src="images/simple_icons_black/Twitter.png"></a></li>
  <li><a href="https://plus.google.com/share?url=http%3A%2F%2Fwww.kpwags.com" target="_blank" title="Share on Google+"><img src="images/simple_icons_black/Google+.png"></a></li>
  <li><a href="http://www.reddit.com/submit?url=http%3A%2F%2Fwww.kpwags.com&title=KPWAGS" target="_blank" title="Submit to Reddit"><img src="images/simple_icons_black/Reddit.png"></a></li>
</ul>
*/