export const Header = (navigateTo) => {
  const header = document.createElement('header');
  header.className = 'header';

  const brand = document.createElement('div');
  brand.className = 'brand';
  brand.textContent = 'WALLYWOOD';

  const nav = document.createElement('nav');
  const links = [
    { label: 'FORSIDE', hash: '' },
    { label: 'PLAKATER', hash: '#/plakater' },
    { label: 'OM OS', hash: '#/om-os' },
    { label: 'KONTAKT OS', hash: '#/kontakt-os' },
    { label: 'LOGIN', hash: '#/login' },
  ];

  links.forEach(({ label, hash }) => {
    const a = document.createElement('button');
    a.className = 'nav-link';
    a.textContent = label;
    a.onclick = () => navigateTo(hash);
    nav.appendChild(a);
  });

  const cart = document.createElement('div');
  cart.className = 'cart';
  cart.setAttribute('aria-label', 'Kurv');

  const hr = document.createElement('hr');
  hr.className = 'divider';

  header.appendChild(brand);
  header.appendChild(nav);
  header.appendChild(cart);
  header.appendChild(hr);
  return header;
};
