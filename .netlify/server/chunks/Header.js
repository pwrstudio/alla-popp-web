import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component } from "./index.js";
const BackButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".cls-1.svelte-524ag6,.cls-2.svelte-524ag6{fill:none}.cls-3.svelte-524ag6{clip-path:url(#clippath)}.cls-4.svelte-524ag6{fill:#fff}.cls-5.svelte-524ag6{fill:#8c8c8b}.cls-2.svelte-524ag6{stroke:#ffffff;stroke-width:38px}",
  map: null
};
const BackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<svg id="${"back"}" data-name="${"Layer 2"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 0 137.6 127.6"}" height="${"50"}"><defs><clipPath id="${"clippath"}"><rect class="${"cls-1 svelte-524ag6"}" width="${"137.6"}" height="${"127.6"}"></rect></clipPath></defs><g id="${"Layer_1-2"}" data-name="${"Layer 1"}"><g><g class="${"cls-3 svelte-524ag6"}"><path class="${"cls-5 svelte-524ag6"}" d="${"M68.8,126.6c33.03,0,59.8-26.77,59.8-59.8S101.83,7,68.8,7,9,33.77,9,66.8s26.77,59.8,59.8,59.8"}"></path><line class="${"cls-2 svelte-524ag6"}" x1="${"57.5"}" y1="${"66.44"}" x2="${"95.81"}" y2="${"66.44"}"></line></g><polygon class="${"cls-4 svelte-524ag6"}" points="${"26.6 66.44 69.61 106.43 69.61 26.46 26.6 66.44"}"></polygon></g></g></svg>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-q1cxyd.svelte-q1cxyd{width:100%;display:flex;justify-content:space-between;user-select:none;font-size:41.2px;line-height:1em}header.svelte-q1cxyd .section-title.svelte-q1cxyd{background:#8c8c8b;color:#ffffff;padding:4px}.back.svelte-q1cxyd.svelte-q1cxyd{position:absolute;top:15px;right:15px}.back.svelte-q1cxyd.svelte-q1cxyd:hover{opacity:0.8}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { link = "/" } = $$props;
  let { titleLink = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.titleLink === void 0 && $$bindings.titleLink && titleLink !== void 0)
    $$bindings.titleLink(titleLink);
  $$result.css.add(css);
  return `<header class="${"svelte-q1cxyd"}">${titleLink ? `<a${add_attribute("href", titleLink, 0)} class="${"section-title svelte-q1cxyd"}">${escape(title)}</a>` : `<div class="${"section-title svelte-q1cxyd"}">${escape(title)}</div>`}</header>

<a class="${"back svelte-q1cxyd"}"${add_attribute("href", link, 0)}>${validate_component(BackButton, "BackButton").$$render($$result, {}, {}, {})}</a>`;
});
export {
  Header as H
};
