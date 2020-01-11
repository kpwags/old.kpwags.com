PhotoSet = function() {
    var internal = {

    };

    var external = {

    };

    var initialize = function() {
        $(document).ready(function() {
            $('#photoset').lightGallery({
                selector: 'a',
                download: false
            });
        });
    }();

    return external;
}();