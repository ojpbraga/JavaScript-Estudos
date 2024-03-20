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
