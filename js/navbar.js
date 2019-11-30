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