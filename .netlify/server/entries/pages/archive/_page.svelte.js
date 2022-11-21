import { c as create_ssr_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index.js";
import { u as urlFor } from "../../../chunks/sanity.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-ceh27b{width:400px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1>ARCHIVE</h1>

${each(data.works, (work) => {
    var _a, _b;
    return `<div><h2>${escape(work.title)}</h2>
    <p>${escape(work.shortDescription)}</p>
    <a${add_attribute("href", "/archive/" + ((_a = work.slug) == null ? void 0 : _a.current), 0)}><img${add_attribute("src", urlFor((_b = work.posterImage) == null ? void 0 : _b.asset).url(), 0)} class="${"svelte-ceh27b"}"></a>
  </div>`;
  })}`;
});
export {
  Page as default
};
