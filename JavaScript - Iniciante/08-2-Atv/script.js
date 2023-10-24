const links = document.querySelectorAll("nav a");

function ativarLink(item) {
    const href = item.href;
    console.log(href);

    if (href === document.location.href) {
        item.style.textDecoration = "none";
        item.style.color = "yellow";
    }

}

links.forEach(ativarLink);