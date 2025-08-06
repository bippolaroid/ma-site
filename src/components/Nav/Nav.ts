function Logo() {
  const el = document.createElement("div");
  el.className =
    "grid border-b text-neutral-300 border-neutral-900 p-6 items-center lg:justify-center";
  el.textContent = "MIKE ANGELO";

  return el;
}

export default function Nav() {
  const el = document.createElement("nav");
  el.className = "lg:w-[15%] lg:fixed";

  el.appendChild(Logo());

  return el;
}
