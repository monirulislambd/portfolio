$(document).ready(function(){
	
    function initParticles() {
        particlesJS('hero', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ecdc63" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5 },
                "size": { "value": 5, "random": true },
                "line_linked": { "enable": true, "distance": 100, "color": "#ecdc63", "opacity": 0.8, "width": 1 },
                "move": { "enable": true, "speed": 2 }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
            },
            "retina_detect": true
        });
    }

    initParticles();

    // Destroy Particles
    $('#destroy-particles').click(function () {
        $('#particles-js canvas').remove();
    });

    // Restore Particles
    $('#restore-particles').click(function () {
        initParticles();
    });


});

//// JS for MixitUP of Portfolio Section ?///////////
// var containerEl = document.querySelector('#container');
var mixer = mixitup('#container');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    const scrollUpButton = document.getElementById('scrollUp');
    if (window.scrollY > 300) {
      scrollUpButton.classList.add('show');
    } else {
      scrollUpButton.classList.remove('show');
    }
  });
  
  // Smooth scroll to the top
  function scrollToTop() {
    window.scrollTo({
         top: 0, 
        behavior: 'smooth',
     });
  }

  // for scrolify--- smooth trnsition from one section to another section
  // $(function() {
  //   $.scrollify({
  //     section : ".scrolify",
  //     setHeights: false,
  //     updateHash: false,
  //     scrollSpeed: 800,
  //   });
  // });


  /*JS for Humburger Menu*/
  
//   function closeNavbar(){
//     const nav = document.getElementById('navbar');
//     nav.style.height = '0%';
//   }

//   function openNavbar(){
//     const nav = document.getElementById('navbar');
//     nav.style.height = '270px';
//   }

  function closeNavbar(){
    const nav = document.getElementById('navbar');
    nav.classList.remove('nav-visible');
  }

function openNavbar() {
	const nav = document.getElementById('navbar');
	nav.classList.toggle('nav-visible');
}

$(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    })
    
});

