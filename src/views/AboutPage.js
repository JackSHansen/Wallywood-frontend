export const AboutPage = () => {
  const wrap = document.createElement('div');
  wrap.className = 'page about';

  const title = document.createElement('h2');
  title.textContent = 'Om os';
  wrap.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'about-grid';

  const text = document.createElement('div');
  text.className = 'about-text';
  text.innerHTML = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <p>Phasellus faucibus libero eu malesuada tristique...</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <p>Phasellus faucibus libero eu malesuada tristique...</p>
  `;

  const img = document.createElement('div');
  img.className = 'about-image';

  grid.appendChild(text);
  grid.appendChild(img);
  wrap.appendChild(grid);
  return wrap;
};
