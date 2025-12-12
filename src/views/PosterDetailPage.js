import { fetchPosterById, resolvePosterImage, cleanHtml, getPosterTitle } from '../api.js';

export const PosterDetailPage = ({ id }) => {
  const wrap = document.createElement('div');
  wrap.className = 'page detail';

  const left = document.createElement('div');
  left.className = 'detail-left';

  const right = document.createElement('div');
  right.className = 'detail-right';

  fetchPosterById(id).then(p => {
    const title = document.createElement('h2');
    title.textContent = getPosterTitle(p);
    left.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = cleanHtml(p.description || 'Ingen beskrivelse.');
    left.appendChild(desc);

    const size = document.createElement('p');
    size.textContent = `Størrelse: ${p.size || '62 x 85 cm'}`;
    left.appendChild(size);

    const sku = document.createElement('p');
    sku.textContent = `Varenummer (SKU): ${p.sku || '2104'}`;
    left.appendChild(sku);

    const price = document.createElement('h3');
    price.textContent = `Pris: ${p.priceDKK ? `${p.priceDKK.toFixed(2)} DKK` : '300,00 DKK'}`;
    left.appendChild(price);

    const actions = document.createElement('div');
    actions.className = 'detail-actions';
    const add = document.createElement('button');
    add.className = 'btn primary';
    add.textContent = 'Læg i kurv';
    const fav = document.createElement('button');
    fav.className = 'btn icon-heart';
    actions.appendChild(add);
    actions.appendChild(fav);
    left.appendChild(actions);

    const img = document.createElement('img');
    img.src = resolvePosterImage(p);
    img.alt = getPosterTitle(p);
    right.appendChild(img);
  }).catch(() => {
    left.textContent = 'Kunne ikke hente plakat';
  });

  wrap.appendChild(left);
  wrap.appendChild(right);
  return wrap;
};
