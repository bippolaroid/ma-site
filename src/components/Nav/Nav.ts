function Logo() {
  const el = document.createElement("div");
  el.className = "w-fit flex gap-3";

  const img = document.createElement("img");
  img.src = "./logo.png";

  const mark = document.createElement("a");
  mark.href = "./";
  mark.textContent = "Mike Angelo";

  el.appendChild(img);
  el.appendChild(mark);

  return el;
}

function Menu() {
  const el = document.createElement("div");
  const link = document.createElement("a");
  link.href = "./project?id=0";
  link.text = "Contact";
  el.appendChild(link);
  return el;
}

export default function Nav() {
  const el = document.createElement("nav");
  el.className = "w-full px-3 py-6 flex justify-between";
  el.appendChild(Logo());
  el.appendChild(Menu());
  return el;
}
