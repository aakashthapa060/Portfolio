

gsap.registerPlugin(ScrollTrigger)


const locoScroll = new LocomotiveScroll({
    smooth: true,
    multiplier: .6,
    scrollbarContainer:false
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

function heroSectionOpAnimation(){
    let rule = CSSRulePlugin.getRule(".heroSection .wrapper .heroContent .HeroWork h1 span::after")
    gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1});
    gsap.from(".heroSection .wrapper .heroContent .hero-item", {y:40, duration: 1, opacity:0,stagger: .5})

    gsap.to(".heroSection .wrapper .floating-items a", {opacity: 1, stagger: .5, duration: .5, delay: 1})
}


gsap.to(".projectSection .wrapper .projectSectionTitle h2 .outer .inner", {
    scrollTrigger: {
        trigger: ".projectSection .wrapper .projectSectionTitle h2 .outer .inner",
        start: "0px 90%",
        scroller: ".smooth-scroll",
        // toggleActions: "restart pause resume none"
        },
    top: 0,
    opacity: 1,
    stagger:.5,
    duration: .5,
    // markers: true
})        
function HeroIdeasAnimation(){
    let heroIdeas = document.querySelectorAll(".heroContent .heroIdeas ul li");
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
// let rule = CSSRulePlugin.getRule(".projectSection .wrapper .projects .card1 .project-img::after")
// gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1});
function cardInnerAnimation(cardNumber){
    gsap.from(".projectSection .wrapper .projects" + " ." + cardNumber + " " +  ".project-content .project-title", {
        scrollTrigger: {
            trigger: ".projectSection .wrapper .projects" + " ." + cardNumber + " " + ".project-content .project-title",
            start: "0px 90%",
            scroller: ".smooth-scroll",
            // toggleActions: "restart pause resume none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
    })
    // console.log(cardNumber)
    gsap.from(".projectSection .wrapper .projects" + " ." + cardNumber +  " .project-content .project-breif", {
        scrollTrigger: {
            trigger: ".projectSection .wrapper .projects " + " ." + cardNumber +  "  .project-content .project-breif",
            start: "0px 90%",
            scroller: ".smooth-scroll",
            // toggleActions: "restart pause resume none"
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
    })
}
function cardImgAnimation(cardNumber){
    gsap.to(".projectSection .wrapper .projects " + "." + cardNumber +  " .project-img .cover", {
        scrollTrigger: {
            trigger: ".projectSection .wrapper .projects " + "." + cardNumber +  " .project-img",
            start: "0px 60%",
            scroller: ".smooth-scroll",
            // toggleActions: "restart pause resume none"
        },
        y: -100 + "%",
        duration: 1.5,
    })
}
function projectCardonScroll(){
    // Img
    cardImgAnimation("card1")
    cardImgAnimation("card2")
    cardImgAnimation("card3")


    // Title
    cardInnerAnimation("card1")
    cardInnerAnimation("card2")
    cardInnerAnimation("card3")
}



window.addEventListener("load", () => {

    heroSectionOpAnimation()
    HeroIdeasAnimation()
    projectCardonScroll()

})
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();