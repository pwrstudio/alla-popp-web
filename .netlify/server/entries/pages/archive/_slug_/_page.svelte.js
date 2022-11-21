import { c as create_ssr_component, b as escape, d as add_attribute } from "../../../../chunks/index.js";
import { u as urlFor, r as renderBlockText } from "../../../../chunks/sanity.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-ceh27b{width:400px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1>ARCHIVE</h1>

<div><h2>${escape(data.title)}</h2>
  <p>${escape(data.shortDescription)}</p>
  <img${add_attribute("src", urlFor((_a = data.posterImage) == null ? void 0 : _a.asset).url(), 0)} class="${"svelte-ceh27b"}">
  ${((_b = data.content) == null ? void 0 : _b.content) ? `<div><!-- HTML_TAG_START -->${renderBlockText(data.content.content)}<!-- HTML_TAG_END --></div>` : ``}
</div>`;
});
export {
  Page as default
};
