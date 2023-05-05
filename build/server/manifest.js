const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.89b57004.js","app":"_app/immutable/entry/app.7b54d3b5.js","imports":["_app/immutable/entry/start.89b57004.js","_app/immutable/chunks/index.9c0150a3.js","_app/immutable/chunks/singletons.5dd7316e.js","_app/immutable/chunks/index.1ac1a48e.js","_app/immutable/entry/app.7b54d3b5.js","_app/immutable/chunks/index.9c0150a3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-c169a7a2.js'),
			() => import('./chunks/1-dcaa89e3.js'),
			() => import('./chunks/2-2afc6d6e.js'),
			() => import('./chunks/3-f986d25c.js'),
			() => import('./chunks/4-e1399f19.js'),
			() => import('./chunks/5-aa13e915.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/films",
				pattern: /^\/api\/films\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-4dbeb609.js')
			},
			{
				id: "/api/genders-by-year-profession-location",
				pattern: /^\/api\/genders-by-year-profession-location\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-a45f4c90.js')
			},
			{
				id: "/api/genders",
				pattern: /^\/api\/genders\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-8caa842a.js')
			},
			{
				id: "/api/professions",
				pattern: /^\/api\/professions\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-a82f9cab.js')
			},
			{
				id: "/api/working-period",
				pattern: /^\/api\/working-period\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-5931daa3.js')
			},
			{
				id: "/geographic-map",
				pattern: /^\/geographic-map\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/roll",
				pattern: /^\/roll\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
