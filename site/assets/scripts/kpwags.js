window.onload = function (e) {
    initializeMode();
};

function initializeMode() {
    if (getCookie('kpwagsoverridemode') === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (getCookie('kpwagsoverridemode') === 'light') {
        document.body.classList.add('light-mode');
    }

    document.getElementById('open-mode-switcher').onclick = function (e) {
        e.preventDefault();
        openModeSwitcher();
    };

    const buttons = document.querySelectorAll('.mode-switch-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function (e) {
            e.preventDefault();
            switchMode(e.target.id.replace('btn-switch-', ''));
        };
    }
}

function openModeSwitcher() {
    if (isSwitcherOpen()) {
        closeModeSwitcher();
        return;
    }

    document.addEventListener('click', handleClickOutside);

    let currentMode = getCurrentMode();
    document.getElementById(`switch-${currentMode}`).classList.add('active');
    document.getElementById('mode-switcher').style.display = 'block';
}

function closeModeSwitcher() {
    document.getElementById('mode-switcher').style.display = 'none';
    document.removeEventListener('click', handleClickOutside);
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

function isSwitcherOpen() {
    return document.getElementById('mode-switcher').style.display === 'block';
}

function switchMode(mode) {
    document.getElementById(`switch-light`).classList.remove('active');
    document.getElementById(`switch-system`).classList.remove('active');
    document.getElementById(`switch-dark`).classList.remove('active');

    if (mode === 'light') {
        setCookie('kpwagsoverridemode', 'light', 365);
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');

        document.getElementById(`switch-system`).classList.remove('active');
        document.getElementById(`switch-dark`).classList.remove('active');
        document.getElementById(`switch-light`).classList.add('active');
    } else if (mode === 'dark') {
        setCookie('kpwagsoverridemode', 'dark', 365);
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');

        document.getElementById(`switch-light`).classList.remove('active');
        document.getElementById(`switch-system`).classList.remove('active');
        document.getElementById(`switch-dark`).classList.add('active');
    } else {
        eraseCookie('kpwagsoverridemode');
        document.body.classList.remove('light-mode');
        document.body.classList.remove('dark-mode');

        document.getElementById(`switch-light`).classList.remove('active');
        document.getElementById(`switch-dark`).classList.remove('active');
        document.getElementById(`switch-system`).classList.add('active');
    }

    closeModeSwitcher();
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
