/**
 * 
 * @param el 
 * @param withChildren 
 * @returns 
 */
export default function removeEventListeners(el: HTMLElement, withChildren: boolean = false) {
  if (withChildren) {
    const newEl = el.cloneNode(true);
    el.parentNode?.replaceChild(newEl, el);
    return newEl;
  }
  else {
    const newEl = el.cloneNode(false);
    while (el.hasChildNodes()) {
      const first: Node | null = el.firstChild;
      if (first === null) continue;
      newEl.appendChild(first);
    }
    el.parentNode?.replaceChild(newEl, el);
    return newEl;
  }
}