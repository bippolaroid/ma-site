import Nav from "./components/Nav/Nav";
import "./style.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ProjectPage from "./pages/Project";

const app = document.querySelector<HTMLDivElement>("#app") as HTMLDivElement;
const { pathname } = window.location;

(async () => {
  app.appendChild(Nav());

  switch (pathname) {
    case "/":
      app.appendChild(await Home());
      break;
    case "/project":
      app.appendChild(await ProjectPage());
      break;
  }

  app.appendChild(Footer());
})();
