import "./style.css";
import { renderIntroduction } from "./components/intro";
import { renderWorks } from "./components/works";
import { renderFooter } from "./components/footer";
import { renderSocials } from "./components/socials";

export const getBasePath = () => {
  const base = import.meta.env.BASE_URL;
  console.log("Base path:", base);
  return base;
};

const routes: { [key: string]: () => void } = {
  [getBasePath()]: renderIntroduction,
  [getBasePath() + "works"]: renderWorks,
  [getBasePath() + "socials"]: renderSocials,
};

const navigateTo = (path: string) => {
  const cleanPath = path.replace(/^\/+/, "");
  const fullPath = getBasePath() + cleanPath;
  window.history.pushState({}, "", fullPath);
  renderRoute();
};

const renderRoute = () => {
  const app = document.getElementById("app")!;
  app.innerHTML = "";

  const path = window.location.pathname;
  console.log("Current path:", path);
  console.log("Available routes:", Object.keys(routes));
  const route = routes[path];
  console.log("Matched route:", route);

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
