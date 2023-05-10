const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e274d2c9.js","app":"_app/immutable/entry/app.b83f4823.js","imports":["_app/immutable/entry/start.e274d2c9.js","_app/immutable/chunks/index.9c0150a3.js","_app/immutable/chunks/singletons.8c8ce5e6.js","_app/immutable/chunks/index.1ac1a48e.js","_app/immutable/entry/app.b83f4823.js","_app/immutable/chunks/index.9c0150a3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-4af20135.js'),
			() => import('./chunks/1-58ce441b.js'),
			() => import('./chunks/2-2afc6d6e.js'),
			() => import('./chunks/3-412ddec1.js'),
			() => import('./chunks/4-8304a589.js'),
			() => import('./chunks/5-7dc16c2d.js')
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
				endpoint: () => import('./chunks/_server.ts-e0b1a108.js')
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
