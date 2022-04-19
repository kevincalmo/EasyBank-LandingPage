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
