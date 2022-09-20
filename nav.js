const Nav = document.querySelector(".navigation-menu-bar");
const navHamburger = document.querySelector(".mobile-nav-button");

navHamburger.addEventListener('click', () => {
const hellboy = Nav.getAttribute("data-visible");

if (hellboy === "false") {
    Nav.setAttribute("data-visible","true");
    navHamburger.setAttribute("aria-expanded","true");
}
else if (hellboy === "true") {
    Nav.setAttribute("data-visible","false");
    navHamburger.setAttribute("aria-expanded","false");
} 
    
});