var initialPath = `M 10 100 Q 500 100 990 100`;

 var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector('#string');

// string.addEventListener('mouseenter', (dets) => {
//     console.log('entered');
// });

// string.addEventListener('mouseleave', () => {
//     console.log('leaved')
// })

// string.addEventListener('mousemove', (dets) => {
//     console.log(dets.y);
//     console.log(dets.x);
// })

string.addEventListener('mousemove', (dets) => {
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to("svg path", {
        attr: {
            d: initialPath,
            duration: 0.3,
            ease: "power3.out",
        }
    })
})

string.addEventListener('mouseleave', () => {
    gsap.to("svg path", {
        attr: {
            d: finalPath,
            duration: 1.5,
            ease: "elastic.out(1,0.2)"
        }
    })
})