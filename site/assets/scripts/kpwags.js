window.onload = function (e) {
    if (getCookie('kpwagsoverridemode') === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (getCookie('kpwagsoverridemode') === 'light') {
        document.body.classList.add('light-mode');
    }
};

function toggleDarkMode(buttonName) {
    const buttonText = document.getElementById(`${buttonName}-mode-button`).innerText;

    if (buttonText === 'Light Mode') {
        // override to light
        setCookie('kpwagsoverridemode', 'light', 365);
        document.getElementById(`${buttonName}-mode-button`).innerText = 'Light Mode';
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        // override to dark
        setCookie('kpwagsoverridemode', 'dark', 365);
        document.getElementById(`${buttonName}-mode-button`).innerText = 'Dark Mode';
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
}

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
