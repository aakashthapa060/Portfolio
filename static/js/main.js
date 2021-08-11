
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

window.addEventListener("load", () => {
    heroSectionOpAnimation()

})