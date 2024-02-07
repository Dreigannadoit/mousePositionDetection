const eyes = document.querySelectorAll('.move');
const cursor = document.getElementById('cursor')
const main = document.getElementById('main')

let mousePosX, mousePosY;
let makeCenterX, makeCenterY;

const mousePositionUpdate = (event) => {
    mousePosX = event.clientX;
    mousePosY = event.clientY;

    makeCenterX = mousePosX - window.innerWidth / 2;
    makeCenterY = mousePosY - window.innerHeight / 2;
}

const getEye = () =>{
    eyes.forEach((eye) => {
        let speedx = eye.dataset.speedx;
        let speedy = eye.dataset.speedy;
        eye.style.transform = `translateX(calc(-50% + ${makeCenterX * speedx}px)) translateY(calc(-50% + ${makeCenterY * speedy}px))`;
    });
}

const moveEyes = main.addEventListener('mousemove', (e) => {
    mousePositionUpdate(e);
    getEye()
});
// const cantSee = main.addEventListener('mouseout', (e) => {
//     mousePositionUpdate(e);
//     eyes.forEach((eye) => {
//         eye.style.transform = `translateX(-50%) translateY(-50%)`;
//     });
// });


const moveCursor = window.addEventListener('mousemove', (e) => {
    mousePositionUpdate(e);
    cursor.style.transform = `translateX(calc(-50% + ${makeCenterX}px)) translateY(calc(-50% + ${makeCenterY}px))`;
});