// menu show
const showMenu = (toggleId, navId) => {
  const $toggleElement = document.querySelector(`#${toggleId}`);
  const $navElement = document.querySelector(`#${navId}`);

  if ($toggleElement && $navElement) {
    $toggleElement.addEventListener('click', () => {
      $navElement.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// remove menu
const $navLinkList = document.querySelectorAll('.nav-link');
const $navMenu = document.getElementById('nav-menu');
//? creo que fatla mandarlo a la sección escogida
const linkAction = () => {
  $navMenu.classList.remove('show');
};
$navLinkList.forEach((link) => link.addEventListener('click', linkAction));

// scroll selections active link
const $sectionsList = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  $sectionsList.forEach((currentSection) => {
    let { offsetHeight: sectionHeight, offsetTop: sectionTop } = currentSection;

    sectionTop -= 50;
    let sectionId = currentSection.getAttribute('id');
    //? revisar si el ?. operation es estable, el id section debe existir para que esto funcione, debe coincidir el href de los a con el sectionId de las section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        ?.classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        ?.classList.remove('active');
    }
  });
};
window.addEventListener('scroll', scrollActive);

const scrollHeader = () => {
  const $headerElement = document.querySelector('header');
  //   console.log(this.scrollY);
  //? Modficar el número header
  if (this.scrollY >= 30) {
    $headerElement.classList.add('scroll-header');
  } else {
    $headerElement.classList.remove('scroll-header');
  }
};
window.addEventListener('scroll', scrollHeader);
// // show scrolltop
// function scrollTop() {
//   const scrollTop = document.getElementById('scroll-top');
//   if (this.scrollY >= 560) {
//     scrollTop.classList.add('scroll-header');
//   } else {
//     scrollTop.classList.remove('scroll-header');
//   }
// }
// window.addEventListener('scroll', scrollTop);
