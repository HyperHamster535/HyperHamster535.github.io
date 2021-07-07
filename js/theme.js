themeLink = document.getElementById("themeLink");
themeIcon = document.getElementById("dark-mode-icon");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function darkTheme(){
    themeLink.href = themeLink.href.replace("Light", "Dark");
    window.name = "dark";
    themeIcon.innerHTML = "light_mode"
}

function lightTheme(){
    themeLink.href = themeLink.href.replace("Dark", "Light");
    window.name = "light";
    themeIcon.innerHTML = "dark_mode"
}

async function toggleTheme() {
    themeIcon.style.transition = "all 0.2s ease-in"
    themeIcon.style.transform = "rotate(180deg)"
    await sleep(200)
    themeIcon.style.transition = "all 0.2s ease-out"
    if (window.name == "light"){
        darkTheme();
    } else {
        lightTheme();
    }
    themeIcon.style.transform = "rotate(360deg)"
    await sleep(200)
    themeIcon.style.transition = "all 0s"
    themeIcon.style.transform = "rotate(0deg)"
}

if (window.name == ""){
    if(window.matchMedia("(prefers-color-scheme: dark)")) {
        darkTheme();
    } else {
        lightTheme();
    }
} else if (window.name == "dark"){
    darkTheme();
} else {
    lightTheme();
}