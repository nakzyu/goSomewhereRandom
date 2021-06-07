import SearchBar from "./searchBar";
import {
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "../utilities/coords";
import { store } from "../utilities/store";
import { $, genElem } from "../utilities/dom";

import "./panel.css";

export default function Panel(): void {
  const init = (): void => {
    const $panelDiv = $(".panel");

    SearchBar($panelDiv);

    const $buttonWrapper = genElem($panelDiv, {
      tagName: "div",
      className: "button_wrapper",
    });

    genElem($buttonWrapper, {
      tagName: "button",
      className: "button",
      innerText: "Next",
    }).addEventListener("click", () => {
      setGoogleMapToRandomCoords(getRandomMapMeta(), store);
    });
  };

  init();
}
