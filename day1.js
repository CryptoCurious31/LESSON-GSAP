// Add JS here


// yoyo is responsible for repeating the element infinte
// repeat is used to repeat element how many time.
gsap.to(".box", {
    x : 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
})


gsap.to(".box1", {
    rotate: 360,
    duration: 1.5,
    delay: 1,
    x: 1500,
})

gsap.to(".box2", {
    x: 1500,
    duration: 1.5,
    delay: 2.5,
})

gsap.to(".box3", {
    x: 1500,
    duration: 1.5,
    delay: 3.5,
    borderRadius: "50%"
})



/* stagger is responsible form 
the delay in between the text to animate */
// gsap.from("h2", {
//     y: 20,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     stagger: 1,    
// })


var timeLine = gsap.timeline();

timeLine.from("h2", {
    y: -20,
    opacity: 0,
    duration: 1.5,
    delay: 1
})

timeLine.from("h4", {
    y: -20,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3
})

timeLine.from("h1", {
    scale: 0.5,
    duration: 1.5,
    opacity: 0
})

