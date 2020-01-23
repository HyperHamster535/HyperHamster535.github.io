projectsheight = 1426;
aboutheight = 2751;

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
    scroll = window.scrollY
    // console.log(scroll)

    if (scroll < projectsheight) {
        document.getElementById("nav-home").style.color = "#F65416";
        document.getElementById("nav-projects").style.color = "#FFFFFF";
        document.getElementById("nav-about").style.color = "#FFFFFF";
    } else if (scroll < aboutheight) {
        document.getElementById("nav-home").style.color = "#FFFFFF";
        document.getElementById("nav-projects").style.color = "#F65416";
        document.getElementById("nav-about").style.color = "#FFFFFF";
    } else {
        document.getElementById("nav-home").style.color = "#FFFFFF";
        document.getElementById("nav-projects").style.color = "#FFFFFF";
        document.getElementById("nav-about").style.color = "#68FE9A";
    }

}

function setscroll(amount) {
    window.scrollTo(0, amount)
}