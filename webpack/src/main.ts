// import './index.html';
import './style.css';

const image = require('./assets/img/houseplant.jpg');

// console.log('Hello, world');

function showElement(text: string) {
  const element = document.createElement('h2');
  element.textContent = text;
  element.className = 'main-header';
  return element;
}

function showImage() {
  const img = document.createElement('img');
  img.src = image;
  return img;
}

document.body.append(showElement('Hello, world and webpack!'));
document.body.append(showImage());