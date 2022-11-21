import { c as create_ssr_component, b as escape } from "../../../chunks/index.js";
import { r as renderBlockText } from "../../../chunks/sanity.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>CV</h1>

<h1>${escape(data.title)}</h1>
<h2>${escape(data.bio)}</h2>

<div><!-- HTML_TAG_START -->${renderBlockText(data.content.content)}<!-- HTML_TAG_END --></div>`;
});
export {
  Page as default
};
