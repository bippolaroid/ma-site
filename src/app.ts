import Nav from "./components/Nav/Nav";
import "./style.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ProjectPage from "./pages/Project";
import headManager from "./hooks/headManager";

const { pathname } = window.location;

const app = document.querySelector<HTMLDivElement>("#app") as HTMLDivElement;
const layout = document.createElement("div");
layout.className = "lg:flex grid gap-3 w-full";

(async () => {
  layout.appendChild(Nav());

  switch (pathname) {
    case "/":
      headManager({
        title: "Mike Angelo — Designer, Editor, and Web Developer.",
        description: "Designer, Editor, and Web Developer.",
      });
      layout.appendChild(await Home());
      break;
    case "/project":
      headManager({ title: "Project", description: "Description" });
      layout.appendChild(await ProjectPage());
      break;
    default:
      layout.appendChild(await Home());
      break;
  }

  app.appendChild(layout);
  app.appendChild(Footer());
})();
