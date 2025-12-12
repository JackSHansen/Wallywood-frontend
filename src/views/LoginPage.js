export const LoginPage = () => {
  const wrap = document.createElement('div');
  wrap.className = 'page login';

  const title = document.createElement('h2');
  title.textContent = 'Login';
  wrap.appendChild(title);

  const form = document.createElement('form');
  form.className = 'form';
  form.innerHTML = `
    <label>Din email: *<input type="email" required placeholder="Indtast din email"/></label>
    <label>Din adgangskode: *<input type="password" required placeholder="Indtast din adgangskode"/></label>
    <div class="form-actions">
      <button type="submit" class="btn primary">Login</button>
      <button type="button" class="btn secondary">Annuller</button>
    </div>
    <div class="form-links">
      <a href="#">Glemt adgangskode?</a>
      <a href="#">Opret profil</a>
    </div>
  `;
  wrap.appendChild(form);
  return wrap;
};
