let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.screenY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200,
    
    });
    
    ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
    ScrollReveal().reveal('.home-img,.project-container',{origin:'bottom'});
    ScrollReveal().reveal('.home-content h1 , .about-img',{origin:'left'});
    ScrollReveal().reveal('.home-content p , .about-img',{origin:'right'});


const typed = new Typed('.multiple-text',{
    strings: ['Programmer!','Java Developer.','Javascript Developer.'],
    typeSpeed:100,
    backSpeed:50,
    backDeley:100,
    loop:true

});