const BASE = 'http://localhost:3000/api'; // use your local API base

const handle = async (res) => (res.ok ? res.json() : Promise.reject(new Error(res.status)));

export const fetchGenres = async () => handle(await fetch(`${BASE}/genres`));

export const fetchPosters = async (genreId) => {
  // exact posters URL with optional genreId filter
  const url = genreId ? `${BASE}/posters?genreId=${genreId}` : `${BASE}/posters`;
  return handle(await fetch(url));
};

export const fetchPosterById = async (id) => handle(await fetch(`${BASE}/posters/${id}`));

export const fetchRandomPosters = async (count = 4) => {
  const data = await fetchPosters();
  const items = data.items || data;
  return items.sort(() => Math.random() - 0.5).slice(0, count);
};

// Resolve a poster image from different API shapes and make it absolute
export const resolvePosterImage = (p) => {
  const src =
    p.imageUrl || p.image || p.image_path || p.imagePath || p.url || p.thumbnail;
  if (!src) return 'https://via.placeholder.com/300x400?text=Plakat';
  // absolute if already http(s)
  if (/^https?:\/\//i.test(src)) return src;
  // if API returns a leading slash path, prefix server origin
  const origin = 'http://localhost:3000';
  return src.startsWith('/')
    ? `${origin}${src}`
    : `${origin}/uploads/${src}`; // fallback folder if you store filenames
};

// Strip ALL HTML tags to plain text (handles <p>, <br>, and any other tags)
export const cleanHtml = (s) => {
  const str = typeof s === 'string' ? s : '';
  // Prefer DOM parsing for correctness
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    const text = doc.body.textContent || '';
    // Normalize whitespace where <br> or multiple tags created extra spaces
    return text.replace(/\s+\n/g, '\n').replace(/\n\s+/g, '\n').trim();
  } catch {
    // Fallback: remove all tags via regex if DOMParser unavailable
    return str.replace(/<[^>]*>/g, '').replace(/\s+\n/g, '\n').replace(/\n\s+/g, '\n').trim();
  }
};

// Resolve a poster title from different API fields
export const getPosterTitle = (p) => {
  const t =
    p?.title ||
    p?.name ||
    p?.originalTitle ||
    p?.displayTitle ||
    p?.posterTitle;
  return typeof t === 'string' && t.trim().length ? t.trim() : 'Ukendt titel';
};
