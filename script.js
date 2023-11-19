var tl = gsap.timeline()
tl.from("#nav img, #nav h3, #nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,
})
tl.from("#main h1",{
    y:120,
    opacity:0,
    stagger:0.3
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.2,
    rotate:360,
    duration:1.9
})
tl.from("h5", {
    opacity:0,
    scale:0,

})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.8,
    yoyo:true
})
tl.to("#social-icons a",{
    scale:1,
    x:40,
    stagger:0.5
})

