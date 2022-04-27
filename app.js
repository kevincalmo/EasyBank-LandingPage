/* STICKY NAVIGATION BAR */
window.onscroll = function(){
    navBarFixed();
}

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function navBarFixed(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
            navbar.classList.remove("stiky");
        }
    }

    /* MENU MOBILE */
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const links = document.getElementById('links');
    const herobanner_img = document.getElementById('herobanner-img');

menu.addEventListener('click', ()=>{
    links.classList.add('visible');
    menu.classList.add('close');
    close.classList.add('visible');
});

close.addEventListener('click', ()=> {
    links.classList.remove('visible');
    menu.classList.remove('close');
    close.classList.remove('visible');
})