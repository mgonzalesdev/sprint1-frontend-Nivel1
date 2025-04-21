function openTab(event, tabId) {
    let tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.add("hidden");
        tabcontents[i].classList.remove("tabcontent-open");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("tab-selected");
    }
    document.getElementById(tabId).classList.remove("hidden");
    document.getElementById(tabId).classList.add("tabcontent-open");
    event.currentTarget.className += " tab-selected";

}
const btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", function () {
    updateMenu();
});
let menu = document.getElementById('menu-list');
menu.addEventListener("click", function () {
    if (menu.getAttribute('data-visible') == 'true')
        updateMenu();
});

function updateMenu() {
    let logo = document.getElementById("logo");
    let navbar = document.getElementById("navbar");
    let btnLogin = document.getElementById("btn-login");
    let visible = btnMenu.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
    btnMenu.setAttribute('aria-expanded', visible);
    document.getElementById("menu-list").setAttribute('data-visible', visible);
    document.getElementById("social-links").setAttribute('data-visible', visible);
    if (visible == "false") {
        logo.setAttribute("src", "img/logo-bookmark.svg");
        navbar.classList.remove('movilmenu');
        btnLogin.classList.remove('btn-login-movil');
        btnLogin.classList.add("btn-red");
    } else {
        logo.setAttribute("src", "img/logo-bookmark-white.svg");
        navbar.classList.add('movilmenu');
        btnLogin.classList.remove("btn-red");
        btnLogin.classList.add('btn-login-movil');
    }
}