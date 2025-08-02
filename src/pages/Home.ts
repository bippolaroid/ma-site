import ProjectList from "../components/ProjectList/ProjectList";
import headManager from "../hooks/headManager";

headManager({
  title: "Mike Angelo — Designer, Editor, and Web Developer.",
  description: "Designer, Editor, and Web Developer.",
});

export default async function Home() {
  const structure = [await ProjectList()];

  const el = document.createElement("main");
  for (let item of structure) {
    el.appendChild(item);
  }
  return el;
}
