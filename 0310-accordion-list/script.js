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
  const activeClass = 'ativo';

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
