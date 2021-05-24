import { Options } from "../types/Options";

export default class Element {
  private $parentElem: HTMLElement;
  public $createdElem: HTMLElement;
  private options: Options;

  constructor($elem: HTMLElement, options: Options) {
    this.$parentElem = $elem;
    this.options = options;
    this.create();
  }

  private create(): void {
    const $createdElem = document.createElement(this.options.tagName);
    this.applyOptions($createdElem, this.options);
    this.$parentElem.appendChild($createdElem);
    this.$createdElem = $createdElem;
  }

  private applyOptions($target: HTMLElement, options: Options): void {
    // tagName => freezed property, applying it causes error
    delete this.options.tagName;

    for (const [property, value] of Object.entries(options)) {
      $target[property] = value;
    }
  }
}
