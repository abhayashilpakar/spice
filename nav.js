// const Nav = document.querySelector(".navigation-menu-bar");
// const navHamburger = document.querySelector(".mobile-nav-button");

// navHamburger.addEventListener('click', () => {
// const hellboy = Nav.getAttribute("data-visible");

// if (hellboy === "false") {
//     Nav.setAttribute("data-visible","true");
//     navHamburger.setAttribute("aria-expanded","true");
// }
// else if (hellboy === "true") {
//     Nav.setAttribute("data-visible","false");
//     navHamburger.setAttribute("aria-expanded","false");
// } 
    
// });
// for  mobile  navigation (hambuger )
const mobileBtn = document.querySelector(".mobile-nav-button");
const navBar = document.querySelector('.header-secondary');

mobileBtn.addEventListener('click', function(){
    navBar.classList.toggle('open-nav');

})
// Stop Animations During Window Resizing   :
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


function disableScroll() { 
  document.body.classList.toggle("remove-scrolling"); 
} 
// for  sticky navigation

// const container = document.querySelector(".container")
// const obs = new IntersectionObserver(
//     function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if(!ent.isIntersecting) {
//         document.querySelector(".header").classList.add("sticky");
//     }
// }, 
// {
//     in the  viewport
//     root: null,
//     threshold:0,
// }
// );

// obs.observe(container);


