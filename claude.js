document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
  
          // Update active nav link
          document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });
  
    // Navigation active state on scroll
    function updateActiveNavOnScroll() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
  
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', updateActiveNavOnScroll);
  
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate-in');
  
    function checkInView() {
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
  
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('show');
        }
      });
    }
  
    // Run once on load
    checkInView();
  
    // Run on scroll
    window.addEventListener('scroll', checkInView);
  });
  