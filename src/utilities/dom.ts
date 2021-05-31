import { Options } from "../types/Options";

export const $ = (str: string): HTMLElement => document.querySelector(str);

const applyOptions = ($target: HTMLElement, options: Options): HTMLElement => {
  // tagName => freezed property, applying it causes error
  delete options.tagName;
  Object.entries(options).forEach(([property, value]) => {
    $target[property] = value;
  });
  return $target;
};

export const genElem = (
  $parentElem: HTMLElement,
  options: Options
): HTMLElement => {
  const $elem = document.createElement(options.tagName);
  $parentElem.appendChild($elem);
  return applyOptions($elem, options);
};
