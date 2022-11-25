import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["alla-popp-portrait.png","favicon.png","fonts/AlteHaasGrotesk_Bold.woff","fonts/AlteHaasGrotesk_Bold.woff2"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		entry: {"file":"_app/immutable/start-49a1a957.js","imports":["_app/immutable/start-49a1a957.js","_app/immutable/chunks/index-f26643dc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/archive",
				pattern: /^\/archive\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/archive/[slug]",
				pattern: /^\/archive\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
