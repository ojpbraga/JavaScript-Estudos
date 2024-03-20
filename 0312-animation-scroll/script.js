function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabmenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      // Removendo a classe já ativa de outros elementos
      tabContent.forEach((el) => {
        el.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
      console.log(tabContent[index]);
    }

    tabmenu.forEach((el, index) => {
      el.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

// Accordion List
// Efeito de lista de perguntas e resposta de um site
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  // Evitar repetição de string
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((el) => {
      el.addEventListener("click", (event) => {
        const dt = event.currentTarget;
        const dd = event.currentTarget.nextElementSibling;
        dd.classList.toggle(activeClass);
        console.log(dd);
      });
    });
  }
}
initAccordion();

function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      // Faz o elemento ficar visível na tela
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // Alinhando bloco no início da tela
      });

      // Forma alternativa
      //                 x, y
      // window.scrollTo(0, topSection); É possível criar opções também
      // const topSection = section.offsetTop;
      // window.scrollTo({
      //   top: topSection,
      //   behavior: 'smooth', // behavior é um comportamento
      // });
    });
  });
}
initSmoothScroll();

function animationInitScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowHeigth = window.innerHeight * 0.6;

    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHeigth;
        const isSectionVisible = sectionTop - windowHeigth < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
          console.log(section.classList);
        }
      });
    });
  }
}
animationInitScroll();