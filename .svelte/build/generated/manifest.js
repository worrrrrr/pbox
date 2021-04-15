const c = [
	() => import("..\\..\\..\\src\\routes\\$layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\Category\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\Profile\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\Person\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\Search\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\Cube\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\Help\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/Category/index.svelte
	[/^\/Category\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/Profile/index.svelte
	[/^\/Profile\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/Person/index.svelte
	[/^\/Person\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/Search/index.svelte
	[/^\/Search\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/Cube/index.svelte
	[/^\/Cube\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/Help/index.svelte
	[/^\/Help\/?$/, [c[0], c[8]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];