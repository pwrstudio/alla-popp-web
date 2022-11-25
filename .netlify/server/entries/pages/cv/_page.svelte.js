import { c as create_ssr_component, v as validate_component, d as escape } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/Header.js";
import { r as renderBlockText } from "../../../chunks/sanity.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cv{margin-top:15px}.cv .cv-content{font-size:16.4px;line-height:1em;margin-top:22.5px;margin-bottom:90px}.cv .cv-content h2{font-size:16.4px;line-height:1em;color:#ffffff;text-transform:uppercase;background:#8c8c8b;display:inline-block;margin:0;padding:1px}.cv .cv-content p{margin-top:0;max-width:90ch;color:#8c8c8b;letter-spacing:-0.025em}.cv h1{font-size:41.2px;color:#ffffff;background:#8c8c8b;display:inline;margin:0;text-transform:uppercase;line-height:1em}.cv .bio{font-size:16.4px;color:#ffffff;background:#8c8c8b;display:inline;margin:0;padding:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { title: "CV", link: "/" }, {}, {})}

<div class="${"cv"}"><div><h1>${escape(data.title)}</h1>
    <div><span class="${"bio"}">${escape(data.bio)}</span></div></div>

  <div class="${"cv-content"}"><!-- HTML_TAG_START -->${renderBlockText(data.content.content)}<!-- HTML_TAG_END --></div>
</div>`;
});
export {
  Page as default
};
