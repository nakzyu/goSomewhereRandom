import { Store } from "../types/Store";
import {
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "../utilities/coords";
import SearchBar from "./searchBar";
import Element from "../components/element";
import $ from "../utilities/selector";
import "./panel.css";
import { store } from "../utilities/store";

export default class Panel {
  constructor() {
    this.init();
  }

  init() {
    const $panelDiv = $(".panel");

    new SearchBar($panelDiv);

    new Element($panelDiv, {
      tagName: "button",
      className: "button",
      innerText: "global",
    }).$elem.addEventListener("click", () =>
      setGoogleMapToRandomCoords(getRandomMapMeta(), store)
    );

    new Element($panelDiv, {
      tagName: "button",
      className: "button",
      innerText: "in country",
    }).$elem.addEventListener("click", () =>
      setGoogleMapToRandomCoords(store.meta, store)
    );
  }
}
