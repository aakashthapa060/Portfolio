let cursor = document.querySelector(".cursor");
let x = 0;
let y = 0;
function cursorMovement(){
    window.addEventListener("mousemove", e => {
        x = e.clientX;
        y = e.clientY;
    })
    const mouseMove = () => {
        cursor.style.left = x + 'px'
        cursor.style.top = y + 'px'
        window.requestAnimationFrame(mouseMove)
    }

    mouseMove()
}

function cursorEffects(){
    // Nav
    let navLinks = document.querySelectorAll("nav .nav_items .nav_links ul .nav_item");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.style.width = 1 + 'px';
            cursor.style.height = 1 + 'px';
        })
        link.addEventListener("mouseleave", () => {
            cursor.style.width = 30 +'px';
            cursor.style.height = 30 +'px';
        })
    })
    // Hero 
    let floatingItems = document.querySelectorAll(".heroSection .wrapper .floating-items a");
    floatingItems.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.style.width = 1 + 'px';
            cursor.style.height = 1 + 'px';
        })
        link.addEventListener("mouseleave", () => {
            cursor.style.width = 30 +'px';
            cursor.style.height = 30 +'px';
        })
    })
}
window.addEventListener("load", () => {
    cursorMovement()
    cursorEffects()
})

window.addEventListener("resize", () => {
    if(window.innerWidth < 600){
        cursor.style.display = "none"
    }
})