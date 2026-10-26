// Paragraph selector
const p = document.querySelector('p');

// Add the class when the mouse enters
p.addEventListener('mouseover', () => {
  p.classList.add('p-hovered');
});

// Remove the class when the mouse leaves
p.addEventListener('mouseout', () => {
  p.classList.remove('p-hovered');
});
