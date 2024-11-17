document.addEventListener('DOMContentLoaded', () => {
    const openMenuBtn = document.querySelector('.open-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const nav = document.querySelector('.nav-bar');
  
    openMenuBtn.addEventListener('click', () => {
      nav.classList.add('popup', 'active');
      openMenuBtn.style.display = 'none';
      closeMenuBtn.style.display = 'flex';
    });
  
    closeMenuBtn.addEventListener('click', () => {
      nav.classList.remove('popup', 'active');
      openMenuBtn.style.display = 'flex';
      closeMenuBtn.style.display = 'none';
    });
  });