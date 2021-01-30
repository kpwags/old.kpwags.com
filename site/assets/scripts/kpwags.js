window.onload = function (e) {
    initializeMode();
};

function initializeMode() {
    if (getCookie('kpwagsoverridemode') === 'dark') {
        document.body.classList.add('dark-mode');
        currentMode = "DARK";
    } else if (getCookie('kpwagsoverridemode') === 'light') {
        document.body.classList.add('light-mode');
        currentMode = "LIGHT";
    }

    document.getElementById('toggle-darkmode-button').onclick = function (e) {
        e.preventDefault();
        toggleMode();
    };
}

function toggleMode() {
    let currentMode = getCurrentMode();

    switch (currentMode) {
        case 'light':
            switchMode('dark');
            break;

        case 'dark':
            switchMode('light');
            break;

        default:
            if (document.body.classList.contains("dark-mode")) {
                // switch to light mode
                switchMode('light');
            } else {
                // switch to dark mode
                switchMode('dark');
            }
            break;
    }
}
function getCurrentMode() {
    if (getCookie('kpwagsoverridemode') === 'dark') {
        return 'dark';
    } else if (getCookie('kpwagsoverridemode') === 'light') {
        return 'light';
    } else {
        return 'system';
    }
}

function switchMode(mode) {
    if (mode === 'light') {
        setCookie('kpwagsoverridemode', 'light', 365);
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else if (mode === 'dark') {
        setCookie('kpwagsoverridemode', 'dark', 365);
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        eraseCookie('kpwagsoverridemode');
        document.body.classList.remove('light-mode');
        document.body.classList.remove('dark-mode');
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
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function handleClickOutside(e) {
    e.preventDefault();

    const isClickInside = document.getElementById('mode-switcher').contains(e.target);

    if (!isClickInside && e.target.id !== 'open-mode-switcher') {
        closeModeSwitcher();
    }
}

function toggleReview(element) {
    if (element.nextElementSibling.style.display === 'none') {
        element.nextElementSibling.style.display = 'block';
        element.innerText = 'Hide Thoughts';
    } else {
        element.nextElementSibling.style.display = 'none';
        element.innerText = 'View My Thoughts';
    }

    return false;
}