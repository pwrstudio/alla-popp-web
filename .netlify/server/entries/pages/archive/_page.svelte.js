import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/Header.js";
import { u as urlFor } from "../../../chunks/sanity.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".archive-container.svelte-12ck0eu.svelte-12ck0eu{width:100%;display:flex;flex-wrap:wrap;margin-top:30px}.archive-container.svelte-12ck0eu .archive-item.svelte-12ck0eu{width:50%;padding-right:15px;margin-bottom:40px;user-select:none}@media(max-width: 800px){.archive-container.svelte-12ck0eu .archive-item.svelte-12ck0eu{width:100%}}.archive-container.svelte-12ck0eu .archive-item .text.svelte-12ck0eu{color:#ffffff;margin-bottom:15px;line-height:16.4px}.archive-container.svelte-12ck0eu .archive-item .text .title.svelte-12ck0eu{text-transform:uppercase;background:#8c8c8b;font-size:41.2px;line-height:41.2px;display:inline}.archive-container.svelte-12ck0eu .archive-item .text .short-description.svelte-12ck0eu{font-size:16.4px;line-height:16.4px;background:#8c8c8b;display:inline}.archive-container.svelte-12ck0eu .archive-item .image.svelte-12ck0eu{width:100%;aspect-ratio:16 / 9;line-height:0;background:#8c8c8b}.archive-container.svelte-12ck0eu .archive-item .image img.svelte-12ck0eu{object-fit:fill;width:100%;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { title: "ARCHIVE", link: "/" }, {}, {})}

<div class="${"archive-container svelte-12ck0eu"}">${each(data.works, (work) => {
    var _a, _b;
    return `<a class="${"archive-item svelte-12ck0eu"}"${add_attribute("href", "/archive/" + ((_a = work.slug) == null ? void 0 : _a.current), 0)}><div class="${"text svelte-12ck0eu"}"><span class="${"title svelte-12ck0eu"}">${escape(work.title)},</span>
        <span class="${"short-description svelte-12ck0eu"}">${escape(work.shortDescription)}</span></div>
      <div class="${"image svelte-12ck0eu"}"><img${add_attribute("src", urlFor((_b = work.posterImage) == null ? void 0 : _b.asset).quality(90).width(800).url(), 0)}${add_attribute("alt", work.title, 0)} class="${"svelte-12ck0eu"}"></div>
    </a>`;
  })}
</div>`;
});
export {
  Page as default
};
