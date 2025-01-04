import { createP, createLink, createWrapper } from "../ui/helper";
export const renderIntroduction = () => {
  const app = document.getElementById("app")!;
  app.innerHTML = ""; // Clear previous content

  const wrapper = createWrapper("intro-wrapper");

  const heading = createP("minhduc // mynkie");
  heading.className = "heading";

  const age = createP("22.");

  const description = createP("");
  description.innerHTML = `
    junior software engineer.<br><br>
    currently apprentice at Ennov.<br><br>
    based in Paris, France.<br>
    +84 h-town represented.<br><br>
  `;

  const worksLink = createLink("works", "works", true);

  wrapper.append(heading, age, description, worksLink);
  app.appendChild(wrapper);
};
