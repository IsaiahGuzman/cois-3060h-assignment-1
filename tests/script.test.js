/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

// Setup -------------------------------------------------------
beforeEach(() => {
  // Clear the cache so script.js executes fully before every test
  jest.resetModules(); 

  // Load the HTML from /src
  const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
  document.body.innerHTML = html;

  // Load script.js so it attaches the click listeners to the fresh HTML
  require('../src/script.js');
});

// Helpers -----------------------------------------------------
function clickTab(targetName) {
  document.querySelector(`button[data-target="${targetName}"]`).click();
}

function isArticleActive(id) {
  return document.getElementById(id).classList.contains('active');
}

// Tests -------------------------------------------------------
describe('Tab Navigation', () => {

  test('clicking Collection Methods shows the collection-methods article', () => {
    clickTab('collection-methods');
    expect(isArticleActive('collection-methods')).toBe(true);
  });

  test('clicking Collection Methods hides the Data Sources article', () => {
    // Click Data Sources to verify it is the currently active tab
    clickTab('data-sources'); 
    
    // Click Collection Methods and verify Data Sources is hidden
    clickTab('collection-methods');
    expect(isArticleActive('data-sources')).toBe(false);
  });

  test('clicking Publication Venues shows the publication-venues article', () => {
    clickTab('publication-venues');
    expect(isArticleActive('publication-venues')).toBe(true);
  });

});
