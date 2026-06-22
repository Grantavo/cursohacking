function showTab(id, btn) {
  ['descripcion','contenido','resenas'].forEach(t => {
    document.getElementById('tab-' + t).style.display = 'none';
  });
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).style.display = 'block';
  btn.classList.add('active');
}

function toggleSection(header) {
  const list = header.nextElementSibling;
  const chevron = header.querySelector('.chevron');
  const isOpen = list.classList.contains('open');
  list.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}

function expandAll() {
  document.querySelectorAll('.lessons-list').forEach(l => l.classList.add('open'));
  document.querySelectorAll('.chevron').forEach(c => c.classList.add('open'));
}
function collapseAll() {
  document.querySelectorAll('.lessons-list').forEach(l => l.classList.remove('open'));
  document.querySelectorAll('.chevron').forEach(c => c.classList.remove('open'));
}
