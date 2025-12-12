import { fetchRandomPosters, resolvePosterImage, cleanHtml, getPosterTitle } from '../api.js';

export const HomePage = () => {
  const wrap = document.createElement('div');
  wrap.className = 'page home';

  const heroDivider = document.createElement('hr');
  heroDivider.className = 'divider';
  wrap.appendChild(heroDivider);

  const hero = document.createElement('div');
  hero.className = 'hero';
  hero.classList.add('curtains'); // ensure the background image is applied
  wrap.appendChild(hero);

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'Fire tilfældige...';
  wrap.appendChild(title);

  const list = document.createElement('div');
  list.className = 'home-list';
  wrap.appendChild(list);

  fetchRandomPosters(4).then(items => {
    items.forEach(p => {
      const row = document.createElement('div');
      row.className = 'home-row';

      const img = document.createElement('img');
      img.src = resolvePosterImage(p);
      img.alt = getPosterTitle(p);
      row.appendChild(img);

      const info = document.createElement('div');
      info.className = 'home-info';

      const title = document.createElement('h3');
      title.textContent = getPosterTitle(p);
      info.appendChild(title);

      const desc = document.createElement('p');
      desc.textContent = cleanHtml(p.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
      info.appendChild(desc);

      const genre = document.createElement('p');
      const g = p.genreName || p.genre?.name || p.genres?.[0]?.name || 'Ukendt genre'; // ternary + destructuring-style access
      genre.textContent = `Genre: ${g}`;
      info.appendChild(genre);

      const actions = document.createElement('div');
      actions.className = 'home-actions';

      const more = document.createElement('button');
      more.className = 'btn secondary';
      more.textContent = 'Læs mere';
      more.onclick = () => { window.location.hash = `#/plakat?id=${p.id}`; };

      const fav = document.createElement('button');
      fav.className = 'btn icon-heart';

      actions.appendChild(more);
      actions.appendChild(fav);
      info.appendChild(actions);

      row.appendChild(info);
      list.appendChild(row);
    });
  });

  return wrap;
};
