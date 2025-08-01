import footerHTML from "./footer.html?raw"

export default function Footer() {
    const el = document.createElement('div');
    el.innerHTML = footerHTML;
    return el;
}