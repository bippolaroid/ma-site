import ProjectList from "../components/ProjectList/ProjectList";
import headManager from "../hooks/head-manager";

headManager({
  title: "Mike Angelo — Designer, Editor, and Web Developer.",
  description: "Designer, Editor, and Web Developer.",
});

const structure = [ProjectList()];

export default function Home() {
  const el = document.createElement("main");
  for (let item of structure) {
    el.appendChild(item);
  }
  return el;
}
