const languageSelect = document.querySelector('#language');
let language = 'ko';
const requestedLanguage = new URLSearchParams(location.search).get('lang');
if (requestedLanguage === 'ko' || requestedLanguage === 'en') language = requestedLanguage;
function applyLanguage() {
 document.documentElement.lang = language; languageSelect.value = language;
 document.querySelectorAll('[data-ko][data-en]').forEach(node => { node.textContent = node.dataset[language]; });
 document.querySelectorAll('[data-alt-ko]').forEach(node => { node.alt = node.getAttribute('data-alt-' + language); });
 languageSelect.setAttribute('aria-label', language === 'ko' ? '언어 선택' : 'Select language');
 document.querySelector('#previous-project')?.setAttribute('aria-label', language === 'ko' ? '이전 작업물' : 'Previous project');
 document.querySelector('#next-project')?.setAttribute('aria-label', language === 'ko' ? '다음 작업물' : 'Next project');
 document.querySelectorAll('[data-language-link]').forEach(link => { link.href = '/romangho-launcher/' + (language === 'en' ? '?lang=en' : ''); });
 document.querySelectorAll('[data-language-home]').forEach(link => { link.href = '/' + (language === 'en' ? '?lang=en' : ''); });
 document.querySelectorAll('header .brand, header nav a').forEach(link => {
  const url = new URL(link.href); if (language === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
  link.href = url.pathname + url.search + url.hash;
 });
}
languageSelect.addEventListener('change', () => {
 language = languageSelect.value; applyLanguage();
 const url = new URL(location.href); if (language === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang'); history.replaceState(null, '', url);
 equalizeCards();
});
const projects = [...document.querySelectorAll('[data-project]')];
const previous = document.querySelector('#previous-project');
const next = document.querySelector('#next-project');
const workbench = document.querySelector('.workbench');
let current = 0;
function selectProject(index) {
 current = Math.max(0, Math.min(projects.length - 1, index));
 projects.forEach((project, i) => { project.hidden = i !== current; });
 previous.disabled = current === 0; next.disabled = current === projects.length - 1;
 document.querySelector('#project-count').textContent = String(current + 1).padStart(2,'0') + ' / ' + String(projects.length).padStart(2,'0');
}
previous?.addEventListener('click', () => selectProject(current - 1));
next?.addEventListener('click', () => selectProject(current + 1));
let lastWheel = 0;
workbench?.addEventListener('wheel', event => {
 if (event.ctrlKey || event.target.closest('select, details') || projects.length < 2) return;
 const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
 if (Math.abs(delta) < 12) return;
 const destination = current + (delta > 0 ? 1 : -1);
 if (destination < 0 || destination >= projects.length) return;
 event.preventDefault();
 if (Date.now() - lastWheel < 550) return;
 lastWheel = Date.now(); selectProject(destination);
}, {passive:false});
workbench?.addEventListener('keydown', event => {
 if (event.target.closest('select, input, textarea, details') || projects.length < 2) return;
 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
  event.preventDefault(); selectProject(current + (event.key === 'ArrowRight' ? 1 : -1));
 }
});
function equalizeCards() {
 if (!projects.length) return;
 projects.forEach(project => { project.hidden = false; project.style.minHeight = ''; });
 const height = Math.max(...projects.map(project => project.offsetHeight));
 projects.forEach(project => { project.style.minHeight = height + 'px'; });
 selectProject(current);
}
if (projects.length) selectProject(0);
applyLanguage(); equalizeCards();
window.addEventListener('resize', equalizeCards);
document.fonts.ready.then(equalizeCards);
