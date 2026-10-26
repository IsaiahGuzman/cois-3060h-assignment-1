// Paragraph selector
const allParagraphs = document.getElementsByTagName('p');

// Add the class when the mouse enters
allParagraphs.addEventListener('mouseover', () => {
  allParagraphs.classList.add('p-hovered');
});

// Remove the class when the mouse leaves
allParagraphs.addEventListener('mouseout', () => {
  allParagraphs.classList.remove('p-hovered');
});
