import navHTML from "./nav.html?raw";

export default function Nav() {
  const el = document.createElement("nav");
  el.innerHTML = navHTML;
  return el;
}
