import fetchData, { type ProjectData } from "../../hooks/fetchData";
import ProjectCell from "../ProjectCell/ProjectCell";

export default async function ProjectList() {
  const data: ProjectData[] = await fetchData();

  const el = document.createElement("div");
  el.className = "w-full px-3 grid lg:grid-cols-3 md:grid-cols-2 gap-3";
  for (var item of data) {
    el.appendChild(
      ProjectCell({
        id: item.id,
        title: item.title,
        client: item.client,
        src: item.featured,
        tags: item.tags,
      })
    );
  }
  return el;
}
