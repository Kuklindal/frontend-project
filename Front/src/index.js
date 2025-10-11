import './index.css';
const STORAGE_KEY = 'theme';
const html = document.documentElement;
const btn = document.getElementById('themeToggle');

// стартовая тема: сохранённая, иначе системная
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem(STORAGE_KEY);
const initial = saved || (systemDark ? 'dark' : 'light');

html.setAttribute('data-theme', initial);
updateIcon(initial);

btn?.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem(STORAGE_KEY, next);
  updateIcon(next);
});

function updateIcon(mode) {
  if (!btn) return;
  btn.textContent = mode === 'dark' ? '🌙' : '☀️';
}