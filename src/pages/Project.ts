import headManager from "../hooks/headManager";
import ProjectHTML from "./Project.html?raw";

headManager({ title: "Project", description: "Description" });

export default async function ProjectPage() {

  const params = new URL(window.location.href).searchParams;
  const id = params.get("id") || 0;

  const el = document.createElement("main");
  el.className =
    "w-full aspect-video grid justify-center grid-rows-[auto_100%] gap-6";
  el.innerHTML = ProjectHTML;
  return el;
}
