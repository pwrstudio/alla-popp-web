// * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//
//  sanity.js =>
//  functions to work with the Sanity database
//
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

import sanityClient from "@sanity/client"
import blocksToHtml from "@sanity/block-content-to-html"
import imageUrlBuilder from "@sanity/image-url"
import get from "lodash/get.js"
import has from "lodash/has.js"
import getVideoId from "get-video-id"

// const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_ID
const SANITY_PROJECT_ID = "8gukr4oo"

export const client = sanityClient({
    projectId: SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: '2022-12-12', // use a UTC date string
    useCdn: true,
})

const h = blocksToHtml.h

const prepareTextElements = props => {
    let textElements = []
    if (has(props, "node.caption.content"))
        textElements.push(
            h(
                "figcaption",
                { className: "caption" },
                toPlainText(props.node.caption.content)
            )
        )
    if (has(props, "node.attribution"))
        textElements.push(
            h("figcaption", { className: "credits" }, props.node.attribution)
        )
    return textElements
}

export const renderBlockText = text =>
    blocksToHtml({
        blocks: text,
        serializers: serializers,
        projectId: SANITY_PROJECT_ID,
        dataset: "production",
    })

export const toPlainText = (blocks = []) => {
    return blocks
        .map(block => {
            if (block._type !== "block" || !block.children) {
                return ""
            }
            return block.children.map(child => child.text).join("")
        })
        .join("\n\n")
}

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)

const serializers = {
    marks: {
        link: props => {
            const external = get(props, 'mark.href', '').includes('http')
            let linkOptions = external ? { target: "_blank", rel: "noreferrer", href: props.mark.href } : { href: props.mark.href }
            return h(
                "a",
                linkOptions,
                props.children
            )
        },
    },
    types: {
        block: props => {
            const style = props.node.style || "normal"
            if (style === "blockquote") return h("blockquote", {}, props.children)
            if (style === "h2") return h("h2", {}, props.children)
            if (style === "h3") return h("h3", {}, props.children)
            if (style === "h4") return h("h4", {}, props.children)
            return h("p", { className: style }, props.children)
        },
        image: props => {
            return h("figure", { className: "image" }, [
                h("img", {
                    src: urlFor(get(props, "node.asset", ""))
                        .width(1200)
                        .quality(100)
                        .auto("format")
                        .url(),
                }),
                ...prepareTextElements(props),
            ])
        },
        embedBlock: props => {
            // YOUTUBE
            if (get(props, "node.url", "").includes("youtube")) {
                return h("figure", { className: "youtube" }, [
                    h(
                        "div",
                        { className: "embed-container" },
                        h("iframe", {
                            width: "720",
                            height: "480",
                            src:
                                "https://www.youtube.com/embed/" +
                                getVideoId(props.node.url).id,
                            frameborder: "no",
                            allow:
                                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: true,
                        })
                    ),
                    ...prepareTextElements(props),
                ])
            }
            // VIMEO
            if (get(props, "node.url", "").includes("vimeo")) {
                return h("figure", { className: "vimeo" }, [
                    h(
                        "div",
                        { className: "embed-container" },
                        h("iframe", {
                            width: "720",
                            height: "480",
                            src:
                                "https://player.vimeo.com/video/" +
                                getVideoId(props.node.url).id,
                            frameborder: "no",
                            byline: false,
                            color: "#ffffff",
                            allow: "autoplay; fullscreen",
                            allowfullscreen: true,
                        })
                    ),
                    ...prepareTextElements(props),
                ])
            }
            // SOUNDCLOUD
            if (get(props, "node.url", "").includes("soundcloud")) {
                return h("figure", { className: "soundcloud" }, [
                    h(
                        "div",
                        { className: "soundcloud-container" },
                        h("iframe", {
                            width: "100%",
                            height: "300",
                            src:
                                "https://w.soundcloud.com/player/?url=" +
                                get(props, "node.url", "") +
                                "&color=%23fffff",
                            frameborder: "no",
                            scrolling: "no",
                            allow: "autoplay",
                        })
                    ),
                    ...prepareTextElements(props),
                ])
            }
        },
    },
}

export const loadData = async (query, params) => {
    try {
        const res = await client.fetch(query, params)
        if (res === null) {
            return Promise.reject(new Error(404))
        }
        return res
    } catch (err) {
        return Promise.reject(new Error(404))
    }
}