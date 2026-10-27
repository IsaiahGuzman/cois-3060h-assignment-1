// Select all navigation buttons and all articles
const navButtons = document.querySelectorAll('nav button');
const articles = document.querySelectorAll('main article');

// Loop through each button to add a click listener
for (const button of navButtons) {
  button.addEventListener('click', () => {
    
    // 1. Remove the 'active' class from ALL articles
    for (const article of articles) {
      article.classList.remove('active');
    }
    
    // 2. Get the ID of the article we want to show
    const targetId = button.getAttribute('data-target');
    const targetArticle = document.getElementById(targetId);
    
    // 3. Add the 'active' class to the targeted article
    targetArticle.classList.add('active');
  });
}