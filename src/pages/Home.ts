import ProjectCell from "../components/ProjectCell/ProjectCell";
import headManager from "../hooks/headManager";

headManager({
  title: "Mike Angelo — Designer, Editor, and Web Developer.",
  description: "Designer, Editor, and Web Developer.",
});

export default async function Home() {

  const el = document.createElement("main");
  el.className = "second grid gap-12 md:p-6 lg:w-[85%] h-[100vh]";

  const home = document.createElement("div");
  home.className = "w-full h-[50vh] flex justify-end items-end p-6";
  home.innerHTML = `<div class="text-right">
        <h1 class="text-3xl text-neutral-300 h-fit">
          I'm an Art Director & Web Developer,
        </h1>
        <p class="text-neutral-700">
          tech generalist, AI enthusiast, and admirer of the universe.
        </p>
      </div>`;

  const creative = document.createElement("div");
  creative.className = "rounded-xl border grid gap-3 border-neutral-900 p-3";

  const collectionTitle = document.createElement("div");
  collectionTitle.className =
    "flex justify-center items-center rounded-xl text-neutral-500 text-sm -translate-y-7 -mb-6 h-fit bg-neutral-900 w-fit px-6 py-1";
  collectionTitle.textContent = "Creative";

  const collectionWrapper = document.createElement("div");
  collectionWrapper.className = "grid md:grid-cols-3 gap-3";
  collectionWrapper.appendChild(ProjectCell({ img: "./patagonia.jpg" }));

  const collectionMore = document.createElement("div");
  collectionMore.className = "w-full flex justify-center md:justify-end p-3";
  collectionMore.innerHTML = `<a href="" class="underline hover:no-underline">More Creative Work</a>`;

  creative.appendChild(collectionTitle);
  creative.appendChild(collectionWrapper);
  creative.appendChild(collectionMore);

  el.appendChild(home);
  el.appendChild(creative);

  return el;
}
