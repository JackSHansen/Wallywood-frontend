export const ContactPage = () => {
  const wrap = document.createElement('div');
  wrap.className = 'page contact';

  const title = document.createElement('h2');
  title.textContent = 'Kontakt os';
  wrap.appendChild(title);

  const form = document.createElement('form');
  form.className = 'form';
  form.innerHTML = `
    <label>Dit navn: *<input type="text" required placeholder="Indtast dit navn"/></label>
    <label>Din email: *<input type="email" required placeholder="Indtast din email"/></label>
    <label>Din besked: *<textarea required placeholder="Indtast en besked"></textarea></label>
    <div class="form-actions">
      <button type="submit" class="btn primary">Send</button>
      <button type="button" class="btn secondary">Annuller</button>
    </div>
  `;
  wrap.appendChild(form);
  return wrap;
};
