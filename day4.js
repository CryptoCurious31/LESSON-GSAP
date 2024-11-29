var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector('#image');

// main.addEventListener('click', () => {
//     console.log('Event Performed');
// })

// main.addEventListener('mousemove', (dets) => {
//     console.log(dets.x);
//     console.log(dets.y);
// })

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
         x: dets.x,
         y: dets.y,
         duration: 1,
         ease: "back.out"
    })
})


imageDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View Image"
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ffffff8a"
    })
})

imageDiv.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })
})