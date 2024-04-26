document.addEventListener('DOMContentLoaded', function() {
    const parallax = document.querySelector('.parallax');
    const front = document.querySelector('.front-layer');
    const back = document.querySelector('.back-layer');

    const sFront = 1000; 
    const sBack = 700; 

    parallax.addEventListener('mousemove', e => {
        const x = e.clientX; 
        const y = e.clientY;

        front.style.transform = `translate(${x / sFront}%, ${y / sFront}%)`; 
        back.style.transform = `translate(${x / sBack}%, ${y / sBack}%)`; 
    });
});
