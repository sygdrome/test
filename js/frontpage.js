var items = document.querySelectorAll('.btn');

angle = 360 / items.length;

var radians = angle * (Math.PI / 180)


distance = 140;

var forward = true;

document.querySelector('#toggle').onclick = function () {
    if (forward == true) {
        play();
        forward = false
    } else if (forward == false) {
        back();
        forward = true
    }
};
function play() {
    for (i = 0; i < items.length; i++) {
        rot = radians * i;

        behind = 0 + .1 * i

        gsap.to(items[i], {
            y: Math.cos(rot - 3) * distance,
            x: Math.sin(rot - 3) * distance,
            opacity: 1,
            duration: .6,
            ease: "elastic.out(1, .75)",
            delay: behind,
        });
    }

}
function back() {
    for (i = 0; i < items.length; i++) {
        rot = radians * i;
        
        behind = 0 + .1 * i
        
        gsap.to(items[i], {
            y: 0,
            x: 0,
            opacity: 0,
            duration: .6,
            ease: "elastic.in(1, 1)",
            delay: behind,
        });
    }

}