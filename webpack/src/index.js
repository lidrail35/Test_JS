// import './index.html';
// import './style.css';

// console.log('Hello, world');

function showElement(text) {
  const element = document.createElement('h2');
  element.textContent = text;
  return element;
}

document.body.append(showElement('Hello, world and webpack!'));