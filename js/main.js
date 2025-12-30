// MAKE NAVBAR FIXED, STICKY_CLASS//
window.onscroll = function () {
    NAVBAR_header();
  };
  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;

  function NAVBAR_header() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  const scrollHeader = () => {
    const header = document.getElementById('navbar');
    const navy = document.getElementById('navy');
    const nave = document.getElementById('navy2');
    if (window.scrollY >= 50) {
        header.classList.add("scroll-header");
        navy.classList.add("visible");
        nave.classList.add("visible");
      } else {
        header.classList.remove("scroll-header");
        navy.classList.remove("visible");
        nave.classList.remove("visible");
    }
};
  window.addEventListener("scroll", scrollHeader);
// FOR NAV LINK SCROLL UPON CLICK, ACTIVE_CLASS  //
      const navLinks = document.querySelectorAll('.nav_link');
      const sections = document.querySelectorAll('.section');
    
      function updateActiveLink() {
        const fromTop = window.scrollY + window.innerHeight / 2;
    
        sections.forEach(section => {
          if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            const targetId = section.id;
            const targetLink = document.querySelector(`.nav_link[href="#${targetId}"]`);
    
            if (targetLink) {
              navLinks.forEach(link => link.classList.remove('active'));
              targetLink.classList.add('active');
            }
          }
        });
      }
    
      updateActiveLink();
    
      document.addEventListener('scroll', updateActiveLink);

      // FOR SMOOTH SCROLL //
        navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault();
    
          const targetSectionId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetSectionId);
    
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });

// Select all flip cards
document.querySelectorAll('.flip-card').forEach((flipCard) => {
  const flipToBack = flipCard.querySelector('.flip-to-back');
  const flipToFront = flipCard.querySelector('.flip-to-front');

  // Flip to back side
  flipToBack.addEventListener('click', () => {
    flipCard.classList.add('flipped');
  });

  // Flip to front side
  flipToFront.addEventListener('click', () => {
    flipCard.classList.remove('flipped');
  });
});
