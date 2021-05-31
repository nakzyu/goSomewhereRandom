export const $ = (str: string): HTMLElement => document.querySelector(str);

import { Options } from "../types/Options";

const applyOptions = ($target: HTMLElement, options: Options): void => {
  // tagName => freezed property, applying it causes error
  delete options.tagName;

  Object.entries(options).forEach(([property, value]) => {
    $target[property] = value;
  });
};

export const genElem = (
  $parentElem: HTMLElement,
  options: Options
): HTMLElement => {
  const $elem = document.createElement(options.tagName);
  applyOptions($elem, options);
  $parentElem.appendChild($elem);
  return $elem;
};
