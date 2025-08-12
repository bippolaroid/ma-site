function NavBody() {
  const el = document.createElement("div");
  el.className =
    "flex border-b lg:border-none backdrop-blur-xl backdrop-brightness-10 text-neutral-300 border-neutral-900 p-6 items-center justify-between lg:justify-center";

  const logo = document.createElement("div");
  logo.className = "cursor-pointer text-lg hover:scale-110";
  logo.textContent = "MIKE ANGELO";

  const hamburger = document.createElement("div");
  hamburger.className =
    "lg:hidden cursor-pointer text-3xl leading-0 pb-1 hover:scale-110";
  hamburger.textContent = "≡";

  el.appendChild(logo);
  el.appendChild(hamburger);

  hamburger.addEventListener("click", () => {
    document.getElementById("nav-menu")?.classList.toggle("hidden");
  });

  return el;
}

function Menu() {
  const el = document.createElement("div");
  el.className =
    "hidden lg:grid backdrop-brightness-25 backdrop-blur lg:border border-neutral-900 py-6 w-full lg:gap-3 justify-center items-center";
  el.id = "nav-menu";

  const menuOptions = ["About", "Creative", "Web", "Misc.", "Contact"];

  for (let item of menuOptions) {
    const itemLink = document.createElement("a");
    itemLink.href = "./";
    itemLink.className = "hover:underline lg:text-sm text-xl";
    itemLink.textContent = item;

    const itemEl = document.createElement("div");
    itemEl.className = "text-center py-6 lg:py-0";
    itemEl.appendChild(itemLink);
    el.appendChild(itemEl);
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      document.getElementById("nav-menu")?.classList.remove("hidden");
    } else {
      document.getElementById("nav-menu")?.classList.add("hidden");
    }
  });

  return el;
}

export default function Nav() {
  const el = document.createElement("nav");
  el.className = "w-full z-1 lg:w-[15%] fixed";

  el.appendChild(NavBody());
  el.appendChild(Menu());

  return el;
}
