export default class Button {
  private $elem: HTMLElement;
  public $button: HTMLButtonElement;

  constructor($elem: HTMLElement) {
    this.$elem = $elem;
  }

  public make(innerText: string): Button {
    const $button = document.createElement("button");
    $button.className = "button";
    $button.innerText = innerText;
    this.$elem.appendChild($button);
    this.$button = $button;

    return this;
  }
}
