import Nav from "./components/Nav/Nav";
import "./style.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ProjectPage from "./pages/Project";

const { pathname } = window.location;

const app = document.querySelector<HTMLDivElement>("#app") as HTMLDivElement;
const layout = document.createElement("div");
layout.className = "lg:flex grid gap-3 px-3 w-full max-w-[1440px]";

(async () => {
  layout.appendChild(Nav());

  pathname === "/"
    ? layout.appendChild(await Home())
    : pathname === "/project"
    ? layout.appendChild(await ProjectPage())
    : layout.appendChild(await Home());

  app.appendChild(layout);
  app.appendChild(Footer());
})();
