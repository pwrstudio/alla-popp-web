import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/Header.js";
import { u as urlFor } from "../../../chunks/sanity.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".archive-container.svelte-19orua.svelte-19orua{width:100%;display:flex;flex-wrap:wrap;margin-top:15px}.archive-container.svelte-19orua .archive-item.svelte-19orua{width:calc(50% - 8px);margin-bottom:15px;user-select:none;display:flex;flex-direction:column;justify-content:space-between}.archive-container.svelte-19orua .archive-item.svelte-19orua:nth-child(odd){margin-right:15px}@media(max-width: 800px){.archive-container.svelte-19orua .archive-item.svelte-19orua{width:100%}}.archive-container.svelte-19orua .archive-item .text.svelte-19orua{color:#ffffff;margin-bottom:5px;line-height:16.4px}.archive-container.svelte-19orua .archive-item .text .title.svelte-19orua{text-transform:uppercase;background:#8c8c8b;font-size:41.2px;line-height:48.2px;display:inline;padding-right:6px;margin-right:-6px}.archive-container.svelte-19orua .archive-item .text .short-description.svelte-19orua{font-size:16.4px;line-height:16.4px;background:#8c8c8b;display:inline-block}.archive-container.svelte-19orua .archive-item .image.svelte-19orua{width:100%;min-height:200px;aspect-ratio:16 / 9;line-height:0;background:#8c8c8b}.archive-container.svelte-19orua .archive-item .image img.svelte-19orua{object-fit:cover;width:100%;height:100%}.archive-container.svelte-19orua .archive-item:hover .image.svelte-19orua{opacity:0.8}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { title: "ARCHIVE", link: "/" }, {}, {})}

<div class="${"archive-container svelte-19orua"}">${each(data.works, (work) => {
    var _a, _b;
    return `<a class="${"archive-item svelte-19orua"}"${add_attribute("href", "/archive/" + ((_a = work.slug) == null ? void 0 : _a.current), 0)}><div class="${"text svelte-19orua"}"><span class="${"title svelte-19orua"}">${escape(work.title)}${work.shortDescription ? `,` : ``}</span>
        <span class="${"short-description svelte-19orua"}">${escape(work.shortDescription)}</span></div>
      <div class="${"image svelte-19orua"}"><img${add_attribute("src", urlFor((_b = work.posterImage) == null ? void 0 : _b.asset).quality(90).width(800).url(), 0)}${add_attribute("alt", work.title, 0)} class="${"svelte-19orua"}"></div>
    </a>`;
  })}
</div>`;
});
export {
  Page as default
};
