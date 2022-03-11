document.addEventListener("DOMContentLoaded", function(event) {

  const slider = tns({
    container: '.slider',
    items: 3,
    slideBy: 1,
   autoplay: true, 
    autoplayTimeout: 1800,
    controls: false,
    navPosition: 'bottom',
    navAsThumbnails: true,
    arrowKeys: true,
    autoplayButtonOutput: false,
    responsive: {
      320: {
        items: 1
      },
      684: {
        items: 2
      },
      840: {
        items: 3
      }
    }
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
  });
  
  document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
  });

//hamburger menu
  const menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.nav_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
      console.log('1');
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('nav_active');

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      nav.classList.toggle('nav_active');
      })
    })
  });

// btn read more
  const readMoreBtn = document.getElementById('read_more');
  const textMobile = document.getElementById('aboutus-description-mobile');
  const textFull = document.getElementById('aboutus-description-full');

  readMoreBtn.addEventListener('click', () => {
    textFull.style.display = 'block';
    textMobile.style.display = 'none';
  });

});
