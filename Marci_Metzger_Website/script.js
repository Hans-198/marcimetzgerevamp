
function toggleClass(element, className) {
    element.classList.toggle(className);
}

const animatedElements = document.querySelectorAll('.fade-in-on-scroll, .slide-in');

const appearOptions = {
    threshold: 0.1,  
    rootMargin: '0px 0px -50px 0px'  
};


const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  
            observer.unobserve(entry.target);  
        }
    });
}, appearOptions);


animatedElements.forEach(el => {
    appearOnScroll.observe(el);
});


const nav = document.getElementById("myNav");  
const menuIcon = document.querySelector('.menu-icon'); 

function toggleNav() {
    toggleClass(nav, "open");  
    toggleClass(menuIcon, "change");  
}


window.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
        nav.classList.remove("open");
        menuIcon.classList.remove("change");
    }
});


let throttleTimeout;
window.addEventListener('scroll', function () {
    if (throttleTimeout) return;
    throttleTimeout = setTimeout(() => {
        if (nav.classList.contains('open')) {
            nav.classList.remove("open");
            menuIcon.classList.remove("change");
        }
        throttleTimeout = null;
    }, 200); 
});


const heroText = document.querySelector('.hero-text');

const heroOptions = {
    threshold: 0.1,  
    rootMargin: '0px 0px -50px 0px'  
};


const heroObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  
            observer.unobserve(entry.target); 
        }
    });
}, heroOptions);


if (heroText) {
    heroObserver.observe(heroText);
}

$(document).ready(function(){
    $("#myCarousel").carousel({interval: 500, wrap: false});
      
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
      
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
  });

  document.getElementById('emailForm').addEventListener('submit', function (event) {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('emailError');
    
    // If the email is not valid
    if (!emailInput.validity.valid) {
        errorMessage.style.display = 'block'; // Show error message
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.style.display = 'none'; // Hide error message if valid
    }
});