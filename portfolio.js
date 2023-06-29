let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// ScrollReveal({
//     reset:true,
//     distance:'80px',
//     duration:2000,
//     delay:200,
    
//     });
    
//     ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
//     ScrollReveal().reveal('.home-img,.project-container',{origin:'bottom'});
//     ScrollReveal().reveal('.home-content h1 , .about-img',{origin:'left'});
//     ScrollReveal().reveal('.home-content p , .about-img',{origin:'right'});