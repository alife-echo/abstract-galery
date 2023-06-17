
const cards = document.querySelectorAll('.st-img');

// Define as configurações da animação
const animationConfig = {
  opacity: 0, 
  stagger: 0.5, 
  duration: 1, 
  ease: 'power3.out' 
};
const animationConfigTwo = {
    opacity: 1, 
    stagger: 0.5, 
    duration: 1, 
    ease: 'power3.out' 
  };
gsap.from(cards, animationConfig);
gsap.to(cards,animationConfigTwo)