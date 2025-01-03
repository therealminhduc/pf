import { LinkItem } from "../models/linkItem";
import { getBasePath } from "../main.ts";

export const createP = (text: string): HTMLParagraphElement => {
  const p = document.createElement("p");
  p.textContent = text;

  return p;
};

export const createLink = (
  href: string,
  text: string,
  isInternal = false,
): HTMLAnchorElement => {
  const link = document.createElement("a");
  link.href = isInternal ? getBasePath() + href.replace(/^\//, "") : href;
  link.textContent = text;
  if (isInternal) link.setAttribute("data-link", "");
  return link;
};

export const createWrapper = (className: string): HTMLDivElement => {
  const wrapper = document.createElement("div");
  wrapper.className = className;
  return wrapper;
};

export const createListWithLinks = (
  items: LinkItem[],
  newTab = false,
): HTMLUListElement => {
  const list = document.createElement("ul");

  items.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.href = item.url;
    link.textContent = item.name;

    if (newTab) link.target = "_blank";

    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  return list;
};
