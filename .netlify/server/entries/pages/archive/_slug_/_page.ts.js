import { l as loadData } from "../../../../chunks/sanity.js";
async function load({ params }) {
  const page = await loadData("*[_type == 'work' && slug.current == $slug][0]", { slug: params.slug });
  return page;
}
export {
  load
};
