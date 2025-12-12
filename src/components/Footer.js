export const Footer = () => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const left = document.createElement('div');
  left.className = 'footer-left';
  left.innerHTML = `
    <strong>WALLYWOOD</strong><br/>
    Øster Uttrupvej 1<br/>9000 Aalborg
  `;

  const mid = document.createElement('div');
  mid.className = 'footer-mid';
  mid.innerHTML = `
    CVR: 12345678<br/>
    MAIL: info@wallywood.dk<br/>
    MOBIL: +45 9812 3456
  `;

  const right = document.createElement('div');
  right.className = 'footer-right';
  right.innerHTML = `
    <span class="icon pinterest"></span>
    <span class="icon instagram"></span>
    <span class="icon facebook"></span>
    <span class="icon twitter"></span>
  `;

  const hr = document.createElement('hr');
  hr.className = 'divider';

  footer.appendChild(hr);
  footer.appendChild(left);
  footer.appendChild(mid);
  footer.appendChild(right);
  return footer;
};
