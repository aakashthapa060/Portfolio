function navStaggerAnimation(){
    let navLinks = document.querySelectorAll("nav .nav_items .nav_links ul .nav_item");
    for(i = 0; i < navLinks.length; i++){
        navLinks[i].style.top= "0px";
        navLinks[i].style.opacity= "1";
        navLinks[i].style.transitionDelay= 0.25 * i + 's';
    }
}
navSocialMedia_open = false;
function connectBtnOpenClose(){
    let navBtn_innerItem = document.querySelectorAll("nav .nav_items .nav_links ul .navDropDown-btn .drop_down .drop_down_container li")
    $("nav .nav_items .nav_links ul .navDropDown-btn").click(() => {
        if(navSocialMedia_open === true){
            for(i = 0; i < navBtn_innerItem.length; i++){
                navBtn_innerItem[i].style.left = 20 + "px"
                navBtn_innerItem[i].style.opacity = 0;
                navBtn_innerItem[i].style.transitionDelay = 0.1 * i + 's';
            }
            setTimeout(() => {
                $("nav .nav_items .nav_links ul .navDropDown-btn .drop_down").fadeOut()
                navSocialMedia_open = false

            },500)
        }
        else if(navSocialMedia_open === false){
            $("nav .nav_items .nav_links ul .navDropDown-btn .drop_down").fadeIn()
            setTimeout(() => {
                for(i = 0; i < navBtn_innerItem.length; i++){
                    navBtn_innerItem[i].style.left = 0 + "px"
                    navBtn_innerItem[i].style.opacity = 1;
                    navBtn_innerItem[i].style.transitionDelay = 0.25 * i + 's';
                }
                navSocialMedia_open = true

            },250)

        }
    })
}
let newNavOpen = false;
function hamBurgerNav(){
    let hamBurger = document.querySelector("nav .hamBurger-menu")
    let newNav = document.querySelector("nav .newNav")
    let newNavLinks = document.querySelectorAll("nav .newNav .newNav_container ul li")
    hamBurger.addEventListener("click", () => {
        if(newNavOpen === false){
            newNav.classList.add("expand")
            setTimeout(() => {
                for(i = 0; i < newNavLinks.length; i++){
                    newNavLinks[i].style.left = 0;
                    newNavLinks[i].style.opacity = 1;
                    newNavLinks[i].style.transitionDelay = 0.25 * i + 's';
                }
            },500)
            newNavOpen = true
        }
        else if(newNavOpen === true){
            for(i = 0; i < newNavLinks.length; i++){
                newNavLinks[i].style.left = 20+ 'px';
                newNavLinks[i].style.opacity = 0;
                newNavLinks[i].style.transitionDelay = 0.25 * i + 's';
            }
            setTimeout(() => {
                newNav.classList.remove("expand")

            },250)
            newNavOpen = false
        }
    })
}
window.addEventListener("load", () => {
    navStaggerAnimation()
    connectBtnOpenClose()
    hamBurgerNav()
})