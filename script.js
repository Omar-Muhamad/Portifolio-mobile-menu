const hamburger = document.getElementById('menu-bar');
const header = document.querySelector('header');

const displayMobileNav = () => {
  const mobileNav = document.createElement('div');
  mobileNav.classList.add('mobileNav');
  const nav = `
    <nav id="mobile-nav">
      <i class="fas fa-times fa-2x" id="closeBtn"></i>
      <ul>
        <li class="listItem"><a class="nav-link" href="#projects">Portoflio</a></li>
        <li class="listItem"><a class="nav-link" href="#about-me">About</a></li>
        <li class="listItem">
          <a class="nav-link" href="#contact"
            >Contact <i class="far fa-envelope"></i
          ></a>
        </li>
      </ul>
    </nav>
  `;
  mobileNav.innerHTML = nav;
  header.append(mobileNav);

  const closeBtn = document.getElementById('closeBtn')
  closeBtn.addEventListener('click', () => {
    header.remove(mobileNav);
  });
};

hamburger.addEventListener('click', () => {
  displayMobileNav();
});
