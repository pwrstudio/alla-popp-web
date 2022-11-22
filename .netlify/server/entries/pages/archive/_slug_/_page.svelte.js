import { c as create_ssr_component, b as add_attribute, v as validate_component, d as escape } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
import { u as urlFor, r as renderBlockText } from "../../../../chunks/sanity.js";
import "get-video-id";
const PlayArrow_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-1upb3mv path.svelte-1upb3mv{fill:#ffffff}",
  map: null
};
const PlayArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg width="${"21"}" height="${"35"}" viewBox="${"0 0 21 35"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1upb3mv"}"><path d="${"M0.123047 34.0552V0L20.5614 17.0276L0.123047 34.0552Z"}" class="${"svelte-1upb3mv"}"></path></svg>`;
});
const VideoPlayer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".video-block.svelte-1lzcoqq.svelte-1lzcoqq{text-decoration:none;width:100%;position:relative;display:block;margin-bottom:15px;cursor:pointer}.video-block.svelte-1lzcoqq img.svelte-1lzcoqq{display:block;width:100%;height:100%;object-fit:cover}.video-block.svelte-1lzcoqq .icon.svelte-1lzcoqq{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);z-index:100;width:70px;height:70px;border-radius:50%;background:#8c8c8b;line-height:1.2em;display:flex;justify-content:center;align-items:center;padding-left:7px}.embed.svelte-1lzcoqq.svelte-1lzcoqq{color:#ffffff;cursor:pointer;display:flex;justify-content:center;align-items:center;width:100%}.embed.svelte-1lzcoqq .inner.svelte-1lzcoqq{width:100%;position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%}.embed.svelte-1lzcoqq .inner iframe.svelte-1lzcoqq{width:100%;position:absolute;top:0;left:0;width:100%;height:100%}",
  map: null
};
const VideoPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { poster } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.poster === void 0 && $$bindings.poster && poster !== void 0)
    $$bindings.poster(poster);
  $$result.css.add(css$1);
  return `
<div class="${"video-block svelte-1lzcoqq"}"><div class="${"embed svelte-1lzcoqq"}">${`
      ${poster ? `<img${add_attribute("src", urlFor(poster).quality(90).width(400).url(), 0)} class="${"svelte-1lzcoqq"}">` : ``}
      <div class="${"icon svelte-1lzcoqq"}">${validate_component(PlayArrow, "PlayArrow").$$render($$result, {}, {}, {})}</div>`}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".work{width:50%;margin-top:30px}@media(max-width: 800px){.work{width:100%}}.work .text{line-height:16.4px}.work .text .title{text-transform:uppercase;font-size:41.2px;line-height:41.2px;color:#ffffff;background:#8c8c8b;display:inline}.work .text .short-description{color:#ffffff;background:#8c8c8b;font-size:16.4px;line-height:16.4px;display:inline}.work .video{margin-top:15px;width:100%;line-height:0;background:#8c8c8b}.work .video img{object-fit:fill;width:100%;height:100%}.work-content{font-size:16.4px;line-height:1em;margin-top:15px;margin-bottom:45px}.work-content p{margin-top:0;max-width:90ch;color:#8c8c8b;letter-spacing:-0.02em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render(
    $$result,
    {
      title: "ARCHIVE",
      link: "/archive",
      titleLink: "/archive"
    },
    {},
    {}
  )}

<div class="${"work"}"><div class="${"text"}"><span class="${"title"}">${escape(data.title)},</span>
    <span class="${"short-description"}">${escape(data.shortDescription)}</span></div>
  
  <div class="${"video"}">${validate_component(VideoPlayer, "VideoPlayer").$$render(
    $$result,
    {
      url: data.videoUrl,
      poster: data.posterImage
    },
    {},
    {}
  )}</div>
  ${((_a = data.content) == null ? void 0 : _a.content) ? `<div class="${"work-content"}"><!-- HTML_TAG_START -->${renderBlockText(data.content.content)}<!-- HTML_TAG_END --></div>` : ``}
</div>`;
});
export {
  Page as default
};
