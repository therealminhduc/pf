import {
  createP,
  createLink,
  createWrapper,
  createListWithLinks,
} from "../ui/helper";
import { projects } from "../data/projects.ts";

export const renderWorks = () => {
  const app = document.getElementById("app")!;

  const wrapper = createWrapper("works-wrapper");

  const title = createP("my works");
  title.className = "heading";

  const worksList = createListWithLinks(projects, true);

  const backLink = createLink("/", "back", true);
  document.body.appendChild(backLink);

  wrapper.appendChild(title);
  wrapper.appendChild(worksList);
  wrapper.appendChild(backLink);

  app.appendChild(wrapper);
};
