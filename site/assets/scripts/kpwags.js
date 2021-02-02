window.onload = function (e) {
    detectColorScheme();
};

function switchTheme() {
    let theme = 'light';

    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    } else if (document.documentElement.getAttribute('data-theme')) {
        theme = document.documentElement.getAttribute('data-theme');
    }

    if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function detectColorScheme(){
    let theme = 'light';    //default to light

    //local storage is used to override OS theme settings
    if(localStorage.getItem('theme')){
        if(localStorage.getItem('theme') === 'dark'){
            theme = 'dark';
        }
    } else if(!window.matchMedia) {
        return false;
    } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', theme);

    document.getElementById('toggledarkmode').onclick = function (e) {
        e.preventDefault();
        switchTheme();
    };
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