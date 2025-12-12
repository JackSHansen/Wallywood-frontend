import { HomePage } from './views/HomePage.js';
import { PostersPage } from './views/PostersPage.js';
import { PosterDetailPage } from './views/PosterDetailPage.js';
import { AboutPage } from './views/AboutPage.js';
import { ContactPage } from './views/ContactPage.js';
import { LoginPage } from './views/LoginPage.js';

let outlet;

const routes = {
  '': { title: 'Forside', render: HomePage },
  '#/plakater': { title: 'Plakater', render: PostersPage },
  '#/plakat': { title: 'Plakat', render: PosterDetailPage }, // expects ?id=
  '#/om-os': { title: 'Om os', render: AboutPage },
  '#/kontakt-os': { title: 'Kontakt os', render: ContactPage },
  '#/login': { title: 'Login', render: LoginPage },
};

export const navigateTo = (hash) => {
  window.location.hash = hash;
};

const parseQuery = () => {
  const q = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const params = {};
  q.forEach((v, k) => (params[k] = v));
  return params;
};

const renderRoute = () => {
  const base = window.location.hash.split('?')[0] || '';
  const route = routes[base] || routes[''];
  document.title = `WALLYWOOD - ${route.title}`;
  outlet.innerHTML = '';
  const params = parseQuery();
  outlet.appendChild(route.render(params));
};

export const initRouter = (el) => {
  outlet = el;
  window.addEventListener('hashchange', renderRoute);
  renderRoute();
};
