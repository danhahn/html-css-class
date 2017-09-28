const navToggle = document.querySelector('.burger');
const headerNav = document.querySelector('.header-nav');
const headerNavList = document.querySelector('.header-nav__list');
const sideNavTrigger = document.querySelector('.trigger');
const sidenavContaner = document.querySelector('.sidenav');
const mainTitleBar = document.querySelector('.main-titlebar');
const sideContainer = document.querySelector('.article__secondary');
const side = document.querySelector('.side-nav-inner');
const URL = window.location.pathname;

let navOpen = false;
let isSideNavOpen = false;

navToggle.addEventListener('click', function() {
  sideNavTrigger ? sideNavTrigger.classList.toggle('hide') : () => null;
  this.classList.toggle('active');
  headerNav.style.maxHeight = !navOpen ? `${headerNavList.offsetHeight}px` : 0;
  navOpen = !navOpen;
});

if(sideNavTrigger) {
  sideNavTrigger.addEventListener('click', function() {
    sidenavContaner.classList.toggle('active');
    navOpen = !navOpen;
  });
}
if(sidenavContaner) {
  sidenavContaner.querySelectorAll('.sidenav__item a').forEach((item) => {
    item.pathname === URL ? item.classList.add('active') : null;
  })

  if (window.innerWidth > 768) {
    side.style.width = `${sideContainer.offsetWidth-16}px`;
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      side.style.width = `${sideContainer.offsetWidth-16}px`;      
    } 
    else {
      if (side.hasAttribute('style')) {
        side.removeAttribute('style');
      }
    }
  });

  window.addEventListener('scroll', () => {
    const { top } = mainTitleBar.getBoundingClientRect();
    const barHeight = mainTitleBar.offsetHeight;
    const titleBarOffset = top + barHeight;
    titleBarOffset < 0 ? side.classList.add('fixed') : side.classList.remove('fixed');
  })
}
