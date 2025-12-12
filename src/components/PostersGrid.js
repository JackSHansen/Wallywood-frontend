import { resolvePosterImage, getPosterTitle } from '../api.js';

export const PostersGrid = (posters, onView, genreName) => {
  const grid = document.createElement('section');
  grid.className = 'posters-grid';

  const header = document.createElement('div');
  header.className = 'grid-header';
  const count = (posters || []).length;
  header.innerHTML = `<h2>${genreName || 'Alle genrer'} - ${count} plakater</h2>`;
  grid.appendChild(header);

  const sortWrap = document.createElement('div');
  sortWrap.className = 'sort-wrap';
  sortWrap.innerHTML = `
    <select class="sort-select" aria-label="Sorter efter">
      <option>Sorter efter</option>
      <option value="price-asc">Pris stigende</option>
      <option value="price-desc">Pris faldende</option>
    </select>
  `;
  grid.appendChild(sortWrap);

  const list = document.createElement('div');
  list.className = 'cards';
  grid.appendChild(list);

  (posters || []).forEach(p => {
    const { id, priceDKK } = p; // destructuring
    const card = document.createElement('article');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = resolvePosterImage(p);
    img.alt = getPosterTitle(p);
    card.appendChild(img);

    const name = document.createElement('div');
    name.className = 'card-title';
    name.textContent = getPosterTitle(p);
    card.appendChild(name);

    const price = document.createElement('div');
    price.className = 'card-price';
    price.textContent = `Kr. ${priceDKK ? priceDKK.toFixed(2) : '300,00'}`;
    card.appendChild(price);

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const addBtn = document.createElement('button');
    addBtn.className = 'btn primary';
    addBtn.textContent = 'Læg i kurv';
    actions.appendChild(addBtn);

    const favBtn = document.createElement('button');
    favBtn.className = 'btn icon-heart';
    favBtn.setAttribute('aria-label', 'Favorit');
    actions.appendChild(favBtn);

    const more = document.createElement('button');
    more.className = 'btn secondary';
    more.textContent = 'Læs mere';
    more.onclick = () => onView(id);
    actions.appendChild(more);

    card.appendChild(actions);
    list.appendChild(card);
  });

  return grid;
};
