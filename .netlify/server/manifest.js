export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["alla-popp-portrait.png","favicon.png","fonts/AlteHaasGrotesk_Bold.woff","fonts/AlteHaasGrotesk_Bold.woff2"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		entry: {"file":"_app/immutable/start-d014e8bf.js","imports":["_app/immutable/start-d014e8bf.js","_app/immutable/chunks/index-7a9129a9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
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
};
