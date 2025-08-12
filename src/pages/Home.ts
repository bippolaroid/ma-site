import ProjectCollection from "../components/ProjectCollection";
import fetchData, { type ProjectData } from "../hooks/fetchData";

const data: ProjectData[] = await fetchData();

export default async function Home() {
  const el = document.createElement("main");
  el.className = "second grid gap-12 md:p-6 lg:w-[85%]";

  const home = document.createElement("div");
  home.className = "w-full h-[50vh] flex justify-end items-end p-6";
  home.innerHTML = `<div class="text-right">
        <h1 class="text-3xl text-neutral-300 h-fit">
          I'm an Art Director & Web Developer,
        </h1>
        <p class="text-neutral-700">
          computers generalist, AI enthusiast, and habitual stargazer.
        </p>
      </div>`;

  el.appendChild(home);
  el.appendChild(ProjectCollection("Creative Work", data));

  return el;
}
