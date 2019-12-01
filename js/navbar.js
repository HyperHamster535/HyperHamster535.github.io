function toggleNav() {
    var nav = document.getElementById("navbar");
    if (nav.className === "navOpen") {
        nav.classList.remove("navOpen");
        document.getElementById("menu-button").innerHTML = "menu";
    } else {
        nav.className = "navOpen";
        document.getElementById("menu-button").innerHTML = "menu_open";
    }
}

function setnavlinks() {
    
    projectsheight = 619;
    aboutheight = 1949;
    
    scroll = window.scrollY

    console.log(scroll)

    if (scroll < projectsheight) {
        document.getElementById("nav-home").style.color = "#68FE9A";
        document.getElementById("nav-projects").style.color = "#FFFFFF";
        document.getElementById("nav-about").style.color = "#FFFFFF";
    } else if (scroll < aboutheight) {
        document.getElementById("nav-home").style.color = "#FFFFFF";
        document.getElementById("nav-projects").style.color = "#68FE9A";
        document.getElementById("nav-about").style.color = "#FFFFFF";
    } else {
        document.getElementById("nav-home").style.color = "#FFFFFF";
        document.getElementById("nav-projects").style.color = "#FFFFFF";
        document.getElementById("nav-about").style.color = "#68FE9A";
    }

}