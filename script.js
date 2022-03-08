const hamburger = document.getElementById('menu-bar');
const header = document.querySelector('header');

const displayMobileNav = () => {
  const mobileNav = document.createElement('div');
  mobileNav.classList.add('mobileNav');
  const nav = `
    <nav id="mobile-nav">
      <i class="fas fa-times fa-2x"></i>
      <ul>
        <li><a class="nav-link" href="#projects">Portoflio</a></li>
        <li><a class="nav-link" href="#about-me">About</a></li>
        <li>
          <a class="nav-link" href="#contact"
            >Contact <i class="far fa-envelope"></i
          ></a>
        </li>
      </ul>
    </nav>
  `;
  mobileNav.innerHTML = nav;
  header.append(mobileNav);
};

hamburger.addEventListener('click', () => {
  displayMobileNav();
});
