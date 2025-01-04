import "./style.css";
import { renderIntroduction } from "./components/intro";
import { renderWorks } from "./components/works";
import { renderFooter } from "./components/footer";
import { renderSocials } from "./components/socials";

export const getBasePath = () => {
  return import.meta.env.BASE_URL;
};

const routes: { [key: string]: () => void } = {
  [getBasePath()]: renderIntroduction,
  [getBasePath() + "works"]: renderWorks,
  [getBasePath() + "socials"]: renderSocials,
};

const navigateTo = (path: string) => {
  window.history.pushState({}, "", path);
  renderRoute();
};

const renderRoute = () => {
  const app = document.getElementById("app")!;
  app.innerHTML = "";

  const path = window.location.pathname;
  console.log("Current path:", path);
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
