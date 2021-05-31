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

  init() {
    const $panelDiv = $(".panel");

    new SearchBar($panelDiv);

    genElem($panelDiv, {
      tagName: "button",
      className: "button",
      innerText: "Go",
    }).addEventListener("click", () =>
      setGoogleMapToRandomCoords(getRandomMapMeta(), store)
    );

    genElem($panelDiv, {
      tagName: "button",
      className: "button",
      innerText: "Go in Country",
    }).addEventListener("click", () =>
      setGoogleMapToRandomCoords(store.meta, store)
    );
  }
}
