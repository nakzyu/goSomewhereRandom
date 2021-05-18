import Component from "./GoogleMap";
import Loader from "../utilities/mapLoader";
import $ from "../utilities/selector";
import Props from "../types/Props";
import MapConfigs from "../types/MapConfigs";

export default class GoogleMap {
  public $map: HTMLElement;
  public props: Props;
  public mapConfigs: MapConfigs;

  constructor(props: Props, mapConfigs: MapConfigs) {
    this.props = props;
    this.mapConfigs = mapConfigs;
    this.$map = this.makeTemplate();
    props.$elem.appendChild(this.$map);
  }

  private makeTemplate(): HTMLElement {
    const $div = document.createElement("div");
    $div.id = this.mapConfigs.id;
    return $div;
  }
}
