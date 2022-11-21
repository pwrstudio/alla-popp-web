import { l as loadData } from "../../../chunks/sanity.js";
async function load({ params }) {
  const page = await loadData("*[_type == 'archive']{..., works[]->{...}}[0]");
  return page;
}
export {
  load
};
