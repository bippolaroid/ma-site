import type { ProjectData } from "../hooks/fetchData";
import ProjectCell from "./ProjectCell";

export default function ProjectCollection(title: string, data: ProjectData[]) {
  const el = document.createElement("div");
  el.className = "";

  const componentWrapper = document.createElement('div');
  componentWrapper.className = "border border-neutral-900"

  const collectionTitle = document.createElement("div");
  collectionTitle.className =
    "flex justify-center items-center text-neutral-500 text-sm translate-x-3 -translate-y-6 -mb-6 h-fit bg-neutral-900 w-fit px-6 py-3";
  collectionTitle.textContent = title;

  const collectionWrapper = document.createElement("div");
  collectionWrapper.className = "grid md:grid-cols-3 gap-3 px-3 pb-3 pt-3";

  for (let item of data) {
    const project = {
      id: item.id,
      client: item.client,
      client_logo: item.client_logo,
      title: item.title,
      featured: item.featured,
    };
    collectionWrapper.appendChild(ProjectCell(project));
  }

  const collectionMore = document.createElement("div");
  collectionMore.className = "w-full flex justify-center md:justify-end p-3";
  collectionMore.innerHTML = `<a href="" class="hover:underline">More Creative Work</a>`;

  componentWrapper.appendChild(collectionTitle);
  componentWrapper.appendChild(collectionWrapper);
  el.appendChild(componentWrapper);
  el.appendChild(collectionMore);

  return el;
}
