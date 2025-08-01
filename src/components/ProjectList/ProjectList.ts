import ProjectCell from "../ProjectCell/ProjectCell";

type ProjectData = {
  id: number;
  client: string;
  client_logo: string;
  title: string;
  tags: string[];
  featured: string;
  last_modified: string;
};

let data: ProjectData[] = await fetch(
  "https://cdn.mikeangelo.art/projects.json"
).then((res) => res.json());

export default function ProjectList() {
  const el = document.createElement("div");
  el.className =
    "w-full border border-neutral-900 p-3 rounded grid md:grid-cols-3 lg:grid-cols-4 gap-3";
  for (var item of data) {
    el.appendChild(ProjectCell({ title: item.title, featured: item.featured, tags: item.tags }));
  }
  return el;
}
