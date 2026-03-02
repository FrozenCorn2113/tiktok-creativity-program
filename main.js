/**
 * TikTok Creator Academy - Minimal JavaScript
 * Mobile menu toggle + Filter dropdown only
 */

// Mobile Menu Toggle
(function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (!mobileMenuBtn || !mainNav) return;

  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);

    // Toggle hidden attribute
    if (isExpanded) {
      mainNav.setAttribute('hidden', '');
    } else {
      mainNav.removeAttribute('hidden');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mainNav.setAttribute('hidden', '');
    }
  });
})();

// Knowledge Base Dropdown
(function initKnowledgeBaseDropdown() {
  const kbButton = document.querySelector('[aria-controls="kbMenu"]');
  const kbMenu = document.getElementById('kbMenu');

  if (!kbButton || !kbMenu) return;

  kbButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = kbButton.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded
    kbButton.setAttribute('aria-expanded', !isExpanded);

    // Toggle hidden attribute
    if (isExpanded) {
      kbMenu.setAttribute('hidden', '');
    } else {
      kbMenu.removeAttribute('hidden');
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!kbButton.contains(e.target) && !kbMenu.contains(e.target)) {
      kbButton.setAttribute('aria-expanded', 'false');
      kbMenu.setAttribute('hidden', '');
    }
  });
})();

// Filter Dropdown
(function initFilterDropdown() {
  const filterBtn = document.getElementById('filterBtn');
  const filterMenu = document.getElementById('filterMenu');
  const filterItems = document.querySelectorAll('.filter__item');

  if (!filterBtn || !filterMenu) return;

  // Toggle filter dropdown
  filterBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = filterBtn.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded
    filterBtn.setAttribute('aria-expanded', !isExpanded);

    // Toggle hidden attribute
    if (isExpanded) {
      filterMenu.setAttribute('hidden', '');
    } else {
      filterMenu.removeAttribute('hidden');
    }
  });

  // Handle filter item clicks (non-functional, just visual feedback)
  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      filterItems.forEach(i => i.classList.remove('filter__item--active'));

      // Add active class to clicked item
      item.classList.add('filter__item--active');

      // Update button text
      filterBtn.childNodes[0].textContent = item.textContent + ' ';

      // Close dropdown
      filterBtn.setAttribute('aria-expanded', 'false');
      filterMenu.setAttribute('hidden', '');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
      filterBtn.setAttribute('aria-expanded', 'false');
      filterMenu.setAttribute('hidden', '');
    }
  });
})();

// Close all dropdowns on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mainNav.setAttribute('hidden', '');
    }

    // Close knowledge base dropdown
    const kbButton = document.querySelector('[aria-controls="kbMenu"]');
    const kbMenu = document.getElementById('kbMenu');
    if (kbButton && kbMenu) {
      kbButton.setAttribute('aria-expanded', 'false');
      kbMenu.setAttribute('hidden', '');
    }

    // Close filter dropdown
    const filterBtn = document.getElementById('filterBtn');
    const filterMenu = document.getElementById('filterMenu');
    if (filterBtn && filterMenu) {
      filterBtn.setAttribute('aria-expanded', 'false');
      filterMenu.setAttribute('hidden', '');
    }
  }
});
