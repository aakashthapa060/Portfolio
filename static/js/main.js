
(function () {
    var scroll = new LocomotiveScroll({
        smooth: true,
        multiplier: 0.6
    });
})();
function heroSectionOpAnimation(){
    // gsap.from(".HeroName", {y:10, duration:1,opacity:0})
    let rule = CSSRulePlugin.getRule(".heroSection .wrapper .heroContent .HeroWork h1 span::after")
    gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1});
    gsap.from(".heroSection .wrapper .heroContent .hero-item", {y:50, duration: 1, opacity:0,stagger: .5})
}

function HeroIdeasAnimation(){
    let heroIdeas =document.querySelectorAll(".heroContent .heroIdeas ul li");
    let heroIdeasSection = document.querySelector(".heroContent .heroIdeas ul");
    let slide = 0
    let slided = 32
    setInterval(() => {
        slide -= slided;
        if (slide <= -64){
            slided = -slided
        }
        else if(slide >= 0){
            slided = -slided
        }
        for(i = 0; i < heroIdeas.length; i++){

            gsap.to(heroIdeasSection, {top: slide, duration: 1})
            gsap.from(heroIdeas[i], {opacity: 0})


        }
    }, 3000);

}
window.addEventListener("load", () => {
    heroSectionOpAnimation()
    HeroIdeasAnimation()

})