document.addEventListener("DOMContentLoaded", function (event) {

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
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    console.log('Hamburger click');
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('nav_active');
  });

  menuItem = document.querySelectorAll('.nav_item'),
    menuItem.forEach(item => {
      console.log('items loop');
      item.addEventListener('click', () => {
        console.log('Item click');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
      })
    })

  // btn read more
  const readMoreBtn = document.getElementById('read_more');
  const textMobile = document.getElementById('aboutus-description-mobile');
  const textFull = document.getElementById('aboutus-description-full');

  readMoreBtn.addEventListener('click', () => {
    textFull.style.display = 'block';
    textMobile.style.display = 'none';
  });

  //form
  const form = document.querySelector('#contact-form');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal_close');

  const closeModal = () => {
    modal.style.display = 'none';
  };
  closeBtn.addEventListener('click', closeModal);
  
  const formSubmit = async (event) => {
    const data = new URLSearchParams();
    for (const pair of new FormData(form)) {
      data.append(pair[0], pair[1]);
    }

    event.preventDefault();

    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdCJqCOpaZf4aa8laI1hz-VfpD0RukmGMcD5wd8hSRMS1J9_g/formResponse', {
      method: 'POST',
      body: data,
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    });

    form.reset();
    modal.style.display = 'block'; 

    setTimeout(() => {
      closeModal();
    }, 5000);
  }

  form.addEventListener('submit', formSubmit);
});