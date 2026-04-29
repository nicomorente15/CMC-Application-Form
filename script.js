// ===== VALUES DATA =====
const values = [
  {
    id: 2,
    title: 'An open book',
    text: 'We are open as a team and as a company. We don\'t put walls up unless it\'s necessary. We become better when we share information.\n\nWe are open to diversity of opinion, backgrounds, and thought.',
    icon: '<img src="images/Our Values/book.svg" alt="Book icon" />'
  },
  {
    id: 3,
    title: 'Be a coach',
    text: 'We want the best for our customers and ourselves. We coach people to their best potential.\n\nThat\'s why a leader at CMC is both a teammate and a mentor.',
    icon: '<img src="images/Our Values/megaphone.svg" alt="Coach icon" />'
  },
  {
    id: 4,
    title: 'Play as a team',
    text: 'We play because we\'re creators. Life is short. Let\'s build something meaningful.\n\nWe play as a team because great teams build great things together. We keep those standards high.',
    icon: '<img src="images/Our Values/group.svg" alt="Team icon" />'
  },
  {
    id: 5,
    title: 'Carry the weight',
    text: 'We act like owners. Let\'s empower each other. If we see something that needs change, we lead through it.\n\nWe take ownership and hold ourselves accountable.',
    icon: '<img src="images/Our Values/electricity.svg" alt="Weight icon" />'
  },
  {
    id: 1,
    title: 'Be kind',
    text: 'We can be honest and kind. We can have high standards and be kind. We can say no and be kind.\n\nKindness can vary across cultures, upbringings, and languages — but we try our best to be kind.',
    icon: '<img src="images/Our Values/heart.svg" alt="Heart icon" />'
  }
];

// ===== RENDER VALUES =====
function renderValues() {
  const valuesGrid = document.getElementById('valuesGrid');
  
  const firstFour = values.slice(0, 4);
  const fifthValue = values[4];

  // Render first four values
  const firstFourHtml = firstFour.map(value => `
    <div class="valueCard">
      <div class="valueIcon">${value.icon}</div>
      <h3>${value.title}</h3>
      <p>${value.text}</p>
    </div>
  `).join('');

  // Render fifth value (full width)
  const fifthHtml = `
    <div class="valueCard fullWidth">
      <div class="valueIcon">${fifthValue.icon}</div>
      <h3>${fifthValue.title}</h3>
      <p>${fifthValue.text}</p>
    </div>
  `;

  valuesGrid.innerHTML = firstFourHtml + fifthHtml;
}

// ===== MODAL FUNCTIONS =====
function openModal() {
  const modal = document.getElementById('applicationModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('applicationModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('applicationModal');
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Render values on page load
  renderValues();
});

// ===== HAMBURGER MENU =====
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}

// ===== FORM SUBMISSION =====
function handleFormSubmit(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(document.getElementById('applicationForm'));
  const data = Object.fromEntries(formData);
  
  // Log form data to console (for development)
  console.log('Form submitted:', data);
  
  // Close modal
  closeModal();
  
  // Reset form
  document.getElementById('applicationForm').reset();
  
  // Redirect to home
  window.location.href = '#home';
}

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    const href = e.target.getAttribute('href');
    
    // Skip if it's the logo link (goes to external site)
    if (e.target.classList.contains('logo') || e.target.classList.contains('footer-logo-link')) {
      return;
    }
    
    if (href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});
