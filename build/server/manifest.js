const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.2e17b9e6.js","app":"_app/immutable/entry/app.d3359bd0.js","imports":["_app/immutable/entry/start.2e17b9e6.js","_app/immutable/chunks/index.5444f0bf.js","_app/immutable/chunks/singletons.df34dd57.js","_app/immutable/chunks/index.f1eaaf28.js","_app/immutable/entry/app.d3359bd0.js","_app/immutable/chunks/index.5444f0bf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-0f953d76.js'),
			() => import('./chunks/1-5cbe013c.js'),
			() => import('./chunks/2-ce153ac1.js'),
			() => import('./chunks/3-82d728df.js'),
			() => import('./chunks/4-f6a147b0.js'),
			() => import('./chunks/5-038125f5.js')
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
				endpoint: () => import('./chunks/_server.ts-1c65604c.js')
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
				endpoint: () => import('./chunks/_server.ts-b68f7ac2.js')
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
