window.onload = function(e) {
    console.log({darkmode: getCookie("kpwagsdarkmode")});
    if (getCookie("kpwagsdarkmode") === "1") {
        document.body.classList.add('dark-mode');
    }
}

function toggleDarkMode() {
        if (document.body.classList.contains('dark-mode')) {
            setCookie("kpwagsdarkmode", "0", 365);
        } else {
            setCookie("kpwagsdarkmode", "1", 365);
        }

        document.body.classList.toggle("dark-mode");
    }

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}