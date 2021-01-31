window.onload = function (e) {
    initializeMode();
};

function detectColorScheme(){
    var theme = 'light';    //default to light

    //local storage is used to override OS theme settings
    if(localStorage.getItem('theme')){
        if(localStorage.getItem('theme') === 'dark'){
            var theme = 'dark';
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //OS theme setting detected as dark
        var theme = 'dark';
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function initializeMode() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        currentMode = 'dark';
    } else if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        currentMode = 'light';
    }

    document.getElementById('toggledarkmode').onclick = function (e) {
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
            if (document.body.classList.contains('dark-mode')) {
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
    if (localStorage.getItem('theme') === 'dark') {
        return 'dark';
    } else if (localStorage.getItem('theme') === 'light') {
        return 'light';
    } else {
        return 'system';
    }
}

function switchMode(mode) {
    if (mode === 'light') {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else if (mode === 'dark') {
        localStorage.setItem('theme', 'dark');
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
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