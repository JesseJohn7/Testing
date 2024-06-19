/* function toggleMenu() {
    var navList = document.getElementById("nav-list");
    navList.classList.toggle("show");
}


 */






const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});