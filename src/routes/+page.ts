import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const page = await loadData("*[_type == 'backgroundEmbed'][0]")
    return page;
}