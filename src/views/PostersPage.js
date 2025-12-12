// import { fetchPosters } from '../api.js';
import { Filters } from '../components/Filters.js';
import { PostersGrid } from '../components/PostersGrid.js';

const API_BASE = 'http://localhost:3000/api';
const fetchPosters = async (genreId) => {
  const url = genreId ? `${API_BASE}/posters?genreId=${genreId}` : `${API_BASE}/posters`; // ternary
  const res = await fetch(url);
  return res.ok ? res.json() : Promise.reject(new Error(res.status));
};
const fetchGenre = async (id) => {
  const res = await fetch(`${API_BASE}/genres/${id}`);
  return res.ok ? res.json() : { id, name: 'Ukendt genre' };
};

export const PostersPage = () => {
  document.title = 'WALLYWOOD - Plakater';
  const wrap = document.createElement('div');
  wrap.className = 'page posters';

  const content = document.createElement('div');
  content.className = 'page-content';

  const renderGrid = (data, genreName) => {
    const { items = null } = data; // destructuring
    const list = items ? items : data; // ternary fallback if API returns array
    content.innerHTML = '';
    content.appendChild(PostersGrid(list, (id) => {
      window.location.hash = `#/plakat?id=${id}`;
    }, genreName || 'Alle genrer'));
  };

  const left = Filters(async (genreId) => {
    const [data, genreObj] = await Promise.all([
      fetchPosters(genreId),
      genreId ? fetchGenre(genreId) : Promise.resolve(null),
    ]);
    const gName = genreObj?.name || null;
    document.title = `WALLYWOOD - ${gName ? gName : 'Plakater'}`; // ternary
    renderGrid(data, gName);
  });

  // initial load
  fetchPosters()
    .then((data) => {
      renderGrid(data, null);
    })
    .catch(() => {
      content.textContent = 'Kunne ikke hente plakater';
    });

  wrap.appendChild(left);
  wrap.appendChild(content);
  return wrap;
};
