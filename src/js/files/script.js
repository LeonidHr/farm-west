
document.addEventListener("DOMContentLoaded", () => {

  //* Изменение хедера при прокрутке
  const headerElement = document.querySelector('.header');

  const callback = function(entries, observer) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
    } else {
      headerElement.classList.add('_scroll');
    }
  };

  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);

  //* Скролл до блока
  document.querySelector('.menu__list').addEventListener("click", e => {
    if (e.target.closest('.menu__link')) {
      e.preventDefault();
      scrollToBlock(e.target);
    }
  });


  function scrollToBlock(btn) {
    const btnLink = btn.getAttribute('href');
    
    if (btnLink) {
      const currentSection = document.querySelector(btnLink);

      document.documentElement.classList.remove("menu-open");
      document.documentElement.classList.remove('lock');

      window.scrollBy({
        top: currentSection.getBoundingClientRect().top,
        behavior: "smooth",
      });
      
    }
  }
});