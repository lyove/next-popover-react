/**
 * Create dom element
 * @param param
 * @returns HTMLElement
 */
interface ParamsObject {
    tagName?: string;
    attributes?: { [key: string]: unknown };
    children?: string | Array<Node>;
    style?: Partial<CSSStyleDeclaration>;
  }
  type ParamsType = string | ParamsObject;
  
  export function $<T extends HTMLElement>(params: ParamsType): T {
    if (typeof params === "string") {
      return document.createElement(params) as T;
    }
  
    const { tagName, attributes, children, style } = params;
    const element = document.createElement(tagName || "div");
  
    // attributes of Boolean type
    const booleanTypes = ["disabled", "checked", "selected"];
  
    // set attribute
    Object.entries(attributes || {}).forEach(([key, val]) => {
      if (val) {
        if (booleanTypes.includes(key)) {
          element.setAttribute(key, "true");
        } else {
          element.setAttribute(key, `${val}`);
        }
      }
    });
  
    // set children
    if (children) {
      if (Array.isArray(children)) {
        children.forEach((c) => element.appendChild(c));
      } else {
        element.innerHTML = children.toString();
      }
    }
    // set style
    Object.entries(style || {}).forEach(([key, val]) => {
      if (typeof key !== "number") {
        (<any>element.style)[key] = val;
      }
    });
  
    return element as T;
  }
  