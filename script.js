/**
 * ==========================================================================
 * Interactive Logic & Dynamic Micro-Interactions
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {


  // 3. Premium Subtle Tilt & Glow tracking on Bento boxes
  const bentoItems = document.querySelectorAll('.bento-item');

  bentoItems.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left; // X position within the element
      const y = e.clientY - rect.top;  // Y position within the element

      // Apply custom CSS custom properties for dynamic glow/lighting masks if desired
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);

      // Subtle elegant tilt logic
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -2; // max 2 deg
      const rotateY = ((x - centerX) / centerX) * 2;  // max 2 deg

      item.style.transform = `perspective(1000px) translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    item.addEventListener('mouseleave', () => {
      // Reset smooth transition back to defaults
      item.style.transform = '';
    });
  });
});
