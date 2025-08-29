// Optional: Add animations or interactivity here
// Example: Animate sections on scroll
const sections = document.querySelectorAll('section');
const options = { threshold: 0.2 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));
