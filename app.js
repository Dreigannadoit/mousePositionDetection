const eyes = document.querySelectorAll('.move'); // Assuming your eyes have a class 'eye'
const text = document.querySelectorAll('.text');
const cursor = document.getElementById('cursor')

let mousePosX, mousePosY;

window.addEventListener('mousemove', (e) => {
    text.innerHTML = "i see you";
    let cursorSpeed = cursor.dataset.speed;

    mousePosX = e.clientX;
    mousePosY = e.clientY;

    const makeCenterX = mousePosX - window.innerWidth / 2;
    const makeCenterY = mousePosY - window.innerHeight / 2;
    
    eyes.forEach((eye) => {
        let speedx = eye.dataset.speedx;
        let speedy = eye.dataset.speedy;
        eye.style.transform = `translateX(calc(-50% + ${makeCenterX * speedx}px)) translateY(calc(-50% + ${makeCenterY * speedy}px))`;
    });

    cursor.style.transform = `translateX(calc(-50% + ${makeCenterX}px)) translateY(calc(-50% + ${makeCenterY}px))`;
    
});

window.addEventListener("mouseout", () => {
    text.innerHTML = "where are you?";
});