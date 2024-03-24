const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleClick = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + "rem";
    },
    texto(value) {
        this.element.innerText = value;
    },
}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    handleClick[name](value);
    saveValues(name, value);
    showCss();
}

function saveValues(name, value) {
    localStorage[name] = value;
}

function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach((propertie) => {
        handleClick[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie];
    });
    showCss();
}
setValues();

function showCss() {
    cssText.innerHTML = "<span>" + btn.style.cssText.split('; ').join(';</span><span>');
} 

controles.addEventListener('change', handleChange);


// LocalStorage
// Objeto que salva dados local, sem a "necessidade" de usar banco de dados

// localStorage.nome = 'Andre';
// console.log(localStorage)