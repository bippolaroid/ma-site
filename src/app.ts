import Nav from "./components/Nav/Nav";
import "./style.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

const app = document.querySelector<HTMLDivElement>("#app") as HTMLDivElement;
const { pathname } = window.location;

app.appendChild(Nav());

switch (pathname) {
  case "/":
    app.appendChild(Home());
    break;
  case "/about":
    app.appendChild(About());
    break;
}

app.appendChild(Footer());
