import SearchBar from "./searchBar";
import {
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "../utilities/coordsHelper";
import { store } from "../utilities/store";
import { $, genElem } from "../utilities/domHelper";

import "./panel.css";

export default function Panel(): void {
  const init = (): void => {
    const $panelDiv = $(".panel");

    const $button = genElem($panelDiv, {
      tagName: "button",
      className: "next_button",
    });

    $button.addEventListener("click", () => {
      setGoogleMapToRandomCoords(getRandomMapMeta(), store);
    });

    genElem($button, {
      tagName: "p",
      innerText: "Go",
    });

    genElem($button, {
      tagName: "img",
      className: "img_dice",
      src: "/dice.gif",
    });

    SearchBar($panelDiv);
  };

  init();
}
