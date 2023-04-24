const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-ff4da0f9.js","imports":["_app/immutable/start-ff4da0f9.js","_app/immutable/chunks/index-397f77fd.js","_app/immutable/chunks/singletons-4b8d4714.js","_app/immutable/chunks/index-0845eeea.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-c5b12351.js'),
			() => import('./chunks/1-6688f98f.js'),
			() => import('./chunks/2-56566a0c.js'),
			() => import('./chunks/3-072fd582.js'),
			() => import('./chunks/4-21224c97.js'),
			() => import('./chunks/5-6ed2746f.js')
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
				id: "/api/amount-of-women",
				pattern: /^\/api\/amount-of-women\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-f0acb135.js')
			},
			{
				id: "/api/genders-by-year-profession-location",
				pattern: /^\/api\/genders-by-year-profession-location\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-ab2ca237.js')
			},
			{
				id: "/api/genders-by-year",
				pattern: /^\/api\/genders-by-year\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-78d73b0c.js')
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
				endpoint: () => import('./chunks/_server.ts-35f38c0f.js')
			},
			{
				id: "/api/professions/list",
				pattern: /^\/api\/professions\/list\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-2f66484c.js')
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

export { manifest };
//# sourceMappingURL=manifest.js.map
