// active menu buton
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// menghapus menu bar ketika diklik

window.onscroll = ()=>{
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// menambahkanb efek scroll

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-bio h1,.about-resume', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { origin: 'right' });
ScrollReveal().reveal('.home-bio,heading', { origin: 'top' })
ScrollReveal().reveal('.profile-pic,.about-items,.skills-items,.project-items,.form', { origin: 'bottom' })

// text animasi

const animasiText = new Typed('.animated-text',{
    strings: ['Backend Developer','Web Developer'],
    backSpeed: 100,
    typeSpeed:100,
    backDelay:600,
    loop:true
});
