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

    const $a = genElem($panelDiv, {
      tagName: "a",
      href: `https://www.hotelscombined.com?a_aid=${process.env.HOTELS_COMBINED_KEY}`,

      target: "_blank",
      rel: "nofollow",
    });

    genElem($a, {
      tagName: "img",
      className: "affiliate_img",
      src: "https://assets.portalhc.com/banners/affiliate/en/300x250_TakeABreak.jpg",
      border: "0",
    });
  };

  init();
}
