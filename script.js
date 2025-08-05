const form = document.getElementById('studyForm');
const studyList = document.getElementById('studyList');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const time = document.getElementById('time').value.trim();
  const location = document.getElementById('location').value.trim();

  if (!name || !subject || !time || !location) return;

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Location:</strong> ${location}</p>
  `;

  studyList.appendChild(card);

  form.reset();
});
