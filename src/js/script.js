document.addEventListener("DOMContentLoaded", function(event) {
  console.log(1);

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
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
  });
  
  document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
  });
});
