import { initRouter, navigateTo } from './router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

const app = document.getElementById('app');

const renderShell = () => {
  app.innerHTML = '';
  const shell = document.createElement('div');
  shell.className = 'shell';
  shell.appendChild(Header(navigateTo));
  const content = document.createElement('main');
  content.id = 'content';
  shell.appendChild(content);
  shell.appendChild(Footer());
  app.appendChild(shell);
};

renderShell();
initRouter(document.getElementById('content'));
