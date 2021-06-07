import {
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "../utilities/coords";
import SearchBar from "./searchBar";
import "./panel.css";
import { store } from "../utilities/store";
import { $, genElem } from "../utilities/dom";
import { Store } from "../types/Store";
export default class Panel {
  private store: Store;

  constructor() {
    this.store = store;
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
      innerText: "Next",
    }).addEventListener("click", () => {
      setGoogleMapToRandomCoords(getRandomMapMeta(), store);
    });
  }
}
