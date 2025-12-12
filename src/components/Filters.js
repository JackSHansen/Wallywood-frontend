import { fetchGenres } from '../api.js';

export const Filters = (onSelect) => {
  const aside = document.createElement('aside');
  aside.className = 'filters';

  const title = document.createElement('h3');
  title.textContent = 'Filtre';
  aside.appendChild(title);

  const genreTitle = document.createElement('div');
  genreTitle.className = 'filter-title';
  genreTitle.textContent = 'Genre';
  aside.appendChild(genreTitle);

  const list = document.createElement('ul');
  list.className = 'genre-list';
  aside.appendChild(list);

  fetchGenres()
    .then(genres => {
      (genres.items || genres).forEach(({ id, name }) => {
        const li = document.createElement('li');
        const a = document.createElement('button');
        a.className = 'genre-link';
        a.textContent = name;
        a.onclick = () => onSelect(id);
        li.appendChild(a);
        list.appendChild(li);
      });
    })
    .catch(() => {
      const li = document.createElement('li');
      li.textContent = 'Kunne ikke hente genrer';
      list.appendChild(li);
    });

  const favTitle = document.createElement('div');
  favTitle.className = 'filter-title';
  favTitle.textContent = 'Favoritter';
  aside.appendChild(favTitle);

  return aside;
};
