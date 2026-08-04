// Contact button — replace this with a real mailto/link/scroll action later
document.querySelector('.contact-btn').addEventListener('click', () => {
  window.location.href = 'mailto:your-email@example.com';
});

// Subtle mouse-follow tilt on the lanyard badge for a "hanging" feel
const lanyard = document.querySelector('.lanyard');
const heroCenter = document.querySelector('.hero-center');

if (lanyard && heroCenter && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroCenter.addEventListener('mousemove', (e) => {
    const rect = heroCenter.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const tilt = relX * 6; // max ~3deg extra tilt each side
    lanyard.style.setProperty('--mouse-tilt', `${tilt}deg`);
    lanyard.style.transform = `rotate(${tilt}deg)`;
    lanyard.style.animationPlayState = 'paused';
  });

  heroCenter.addEventListener('mouseleave', () => {
    lanyard.style.transform = '';
    lanyard.style.animationPlayState = 'running';
  });
}
