const eyes = document.querySelectorAll('.move');
const cursor = document.getElementById('cursor');
const main = document.getElementById('main');

let mousePosX, mousePosY;
let makeCenterX, makeCenterY;

const mousePositionUpdate = (event, element) => {
    const rect = element.getBoundingClientRect(); // Get the dimensions and position of the element
    mousePosX = event.clientX - rect.left; // Adjust the mouse position relative to the element
    mousePosY = event.clientY - rect.top;

    makeCenterX = mousePosX - rect.width / 2; // Use the element's width and height
    makeCenterY = mousePosY - rect.height / 2;
}

const getEye = () => {
    eyes.forEach((eye) => {
        let speedx = eye.dataset.speedx;
        let speedy = eye.dataset.speedy;
        eye.style.transform = `translateX(calc(-50% + ${makeCenterX * speedx}px)) translateY(calc(-50% + ${makeCenterY * speedy}px))`;
    });
}

main.addEventListener('mousemove', (e) => {
    mousePositionUpdate(e, main);
    getEye();
});

window.addEventListener('mousemove', (e) => {
    mousePositionUpdate(e, main); // Use main to get relative coordinates
    cursor.style.transform = `translateX(calc(-320% + ${makeCenterX}px)) translateY(calc(-50% + ${makeCenterY}px))`;
});