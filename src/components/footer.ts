import { createP, createLink, createWrapper } from "../ui/helper";

export const renderFooter = () => {
  const footer = document.getElementById("footer")!;
  footer.innerHTML = ""; // Clear previous content

  const wrapper = createWrapper("footer-wrapper");

  const socialsLink = createLink("socials", "on", true);
  const dontExpect = createP("*don't expect some fancy things here.");

  wrapper.append(socialsLink, dontExpect);
  footer.appendChild(wrapper);
};
