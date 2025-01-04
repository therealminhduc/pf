import {
  createP,
  createLink,
  createWrapper,
  createListWithLinks,
} from "../ui/helper";
import { socials } from "../data/socials.ts";

export const renderSocials = () => {
  const app = document.getElementById("app")!;

  const wrapper = createWrapper("socials-wrapper");

  const title = createP("stay in touch");
  title.className = "heading";

  const socialsList = createListWithLinks(socials, true);

  const backLink = createLink("/", "back", true);
  document.body.appendChild(backLink);

  wrapper.appendChild(title);
  wrapper.appendChild(socialsList);
  wrapper.appendChild(backLink);

  app.appendChild(wrapper);
};
