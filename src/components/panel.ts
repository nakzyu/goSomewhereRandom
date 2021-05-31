import {
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "../utilities/coords";
import SearchBar from "./searchBar";
import "./panel.css";
import { store } from "../utilities/store";
import { $, genElem } from "../utilities/dom";
export default class Panel {
  constructor() {
    this.init();
  }

  private init(): void {
    const $panelDiv = $(".panel");

    new SearchBar($panelDiv);

    const $buttonWrapper = genElem($panelDiv, {
      tagName: "div",
      className: "button_wrapper",
    });

    genElem($buttonWrapper, {
      tagName: "button",
      className: "button",
      innerText: "Go",
    }).addEventListener("click", () =>
      setGoogleMapToRandomCoords(getRandomMapMeta(), store)
    );
  }
}
