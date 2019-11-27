import { messages } from './messages';
// Подключение css
import './css/styles.css';

const container = document.querySelector('.container');
container.classList.add('container');

const h1 = document.createElement('h1');
h1.innerText = messages.h1;

container.appendChild(h1);
