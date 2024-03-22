export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);
    
        onMouseMove.tooltipBox = tooltipBox;
    
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
    
        this.addEventListener('mouseleave', onMouseLeave);
        this.addEventListener('mousemove', onMouseMove);
    }
    
    const onMouseLeave = {
        tooltipBox: '',
        element: '',
        handleEvent() {
            this.tooltipBox.remove();
    
            // Removendo evento quando ele parar de ativar
            this.element.removeEventListener('mouseleave', onMouseLeave);
    
            // Removendo onMouseMove eventListener
            this.element.removeEventListener('onmousemove', onMouseMove);
    
        }
    }
    
    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }
    
    
    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });
    
    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
    
}

