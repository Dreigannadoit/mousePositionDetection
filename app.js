const eyes = document.querySelectorAll('.move');
const cursor = document.getElementById('cursor')

let mousePosX, mousePosY;

window.addEventListener('mousemove', (e) => {
    mousePosX = e.clientX;  // X position of mouse
    mousePosY = e.clientY;  // Y position of mouse

    const makeCenterX = mousePosX - window.innerWidth / 2;   // center X position
    const makeCenterY = mousePosY - window.innerHeight / 2;  // center Y position
    
    eyes.forEach((eye) => {
        let speedx = eye.dataset.speedx;
        let speedy = eye.dataset.speedy;
        eye.style.transform = `translateX(calc(-50% + ${makeCenterX * speedx}px)) translateY(calc(-50% + ${makeCenterY * speedy}px))`;
    });

    cursor.style.transform = `translateX(calc(-50% + ${makeCenterX}px)) translateY(calc(-50% + ${makeCenterY}px))`;
    
});