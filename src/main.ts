import "./style.css";
import { renderIntroduction } from "./components/intro";
import { renderWorks } from "./components/works";
import { renderFooter } from "./components/footer";
import { renderSocials } from "./components/socials";

const routes: { [key: string]: () => void } = {
  "/": renderIntroduction,
  "/works": renderWorks,
  "/socials": renderSocials,
};

const navigateTo = (path: string) => {
  window.history.pushState({}, "", path);
  renderRoute();
};

const renderRoute = () => {
  const app = document.getElementById("app")!;
  app.innerHTML = "";

  const path = window.location.pathname;
  const route = routes[path];

  if (route) {
    route();
  } else {
    const notFound = document.createElement("h1");
    notFound.textContent = "404. Page not found.";
    app.appendChild(notFound);
  }
};

window.addEventListener("popstate", renderRoute);

renderRoute();
const setupNavigation = () => {
  const navLinks = document.querySelectorAll("[data-link]");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = (e.target as HTMLAnchorElement).getAttribute("href");
      if (target) navigateTo(target);
    });
  });
};

setupNavigation();

renderFooter();
