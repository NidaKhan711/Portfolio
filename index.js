//services cards animation//
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.cards .card');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
//smooth scroll//
//about//
document.addEventListener("DOMContentLoaded", function() {
    let aboutSection = document.getElementById('about');
    
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
                observer.unobserve(aboutSection); 
            }
        });
    });

    observer.observe(aboutSection);
});
//customer revew//
document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.customers-content .box').forEach(function(box) {
        observer.observe(box);
    });
});
 
//anomation in portfolio//
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('#portfolio, #portfolio h1, .skills, .sikllright, .sikllright h1, .sikllright p, .skills h2, .progress-bar, .skills .projacts, .skillleft');

    elementsToAnimate.forEach(element => {
        element.classList.add('hidden');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
//responsive navbar //
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.nav');
menu.onclick=()=>{
  menu.classList.toggle('fa-x');
  navbar.classList.toggle('active');
}
window.onscroll=()=>{
  menu.classList.remove('fa-x');
  navbar.classList.remove('active');
}
