import { Options } from "../types/Options";

export default class Element {
  private $parentElem: HTMLElement;
  /**
   * Created Element
   */
  public $elem: HTMLElement;
  private options: Options;

  /**
   * @param $parentElem parent HtmlElement to be appended
   * @param options Options for creating HtmlElement
   */
  constructor($parentElem: HTMLElement, options: Options) {
    this.$parentElem = $parentElem;
    this.options = options;
    this.create();
  }

  private create(): void {
    const $elem = document.createElement(this.options.tagName);
    this.applyOptions($elem, this.options);
    this.$parentElem.appendChild($elem);
    this.$elem = $elem;
  }

  private applyOptions($target: HTMLElement, options: Options): void {
    // tagName => freezed property, applying it causes error
    delete this.options.tagName;

    for (const [property, value] of Object.entries(options)) {
      $target[property] = value;
    }
  }
}
