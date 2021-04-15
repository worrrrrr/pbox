import { ssr } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js\"></script>\n\t<script nomodule src=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js\"></script>\n\t<link href=\"https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css\" rel=\"stylesheet\">\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">\n\t\t</div>\n\t</body>\n</html>\n";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths, prerendering }) {
	set_paths(paths);
	set_prerendering(prerendering);
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"Hero_image.jpg","size":93775,"type":"image/jpeg"},{"file":"image.jpg","size":1496943,"type":"image/jpeg"},{"file":"logopea.jpg","size":1236996,"type":"image/jpeg"},{"file":"Pea.PNG","size":10537,"type":"image/png"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/$layout.svelte",
	error: ".svelte/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Category\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/Category/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Profile\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/Profile/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Person\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/Person/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Search\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/Search/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Cube\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/Cube/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Help\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/Help/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					}
	]
};

const hooks = {
	getContext: user_hooks.getContext || (() => ({})),
	getSession: user_hooks.getSession || (() => ({})),
	handle: user_hooks.handle || (({ request, render }) => render(request))
};

const module_lookup = {
	"src/routes/$layout.svelte": () => import("..\\..\\src\\routes\\$layout.svelte"),".svelte/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/Category/index.svelte": () => import("..\\..\\src\\routes\\Category\\index.svelte"),"src/routes/Profile/index.svelte": () => import("..\\..\\src\\routes\\Profile\\index.svelte"),"src/routes/Person/index.svelte": () => import("..\\..\\src\\routes\\Person\\index.svelte"),"src/routes/Search/index.svelte": () => import("..\\..\\src\\routes\\Search\\index.svelte"),"src/routes/Cube/index.svelte": () => import("..\\..\\src\\routes\\Cube\\index.svelte"),"src/routes/Help/index.svelte": () => import("..\\..\\src\\routes\\Help\\index.svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/./_app/pages\\$layout.svelte-334c41fa.js","css":["/./_app/assets/pages\\$layout.svelte-bfa92616.css"],"js":["/./_app/pages\\$layout.svelte-334c41fa.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null},".svelte/build/components/error.svelte":{"entry":"/./_app/error.svelte-2a61af14.js","css":[],"js":["/./_app/error.svelte-2a61af14.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages\\index.svelte-4eb92b29.js","css":[],"js":["/./_app/pages\\index.svelte-4eb92b29.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null},"src/routes/Category/index.svelte":{"entry":"/./_app/pages\\Category\\index.svelte-4caa218e.js","css":[],"js":["/./_app/pages\\Category\\index.svelte-4caa218e.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null},"src/routes/Profile/index.svelte":{"entry":"/./_app/pages\\Profile\\index.svelte-33748481.js","css":["/./_app/assets/pages\\Profile\\index.svelte-64343cad.css"],"js":["/./_app/pages\\Profile\\index.svelte-33748481.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null},"src/routes/Person/index.svelte":{"entry":"/./_app/pages\\Person\\index.svelte-c3e66452.js","css":[],"js":["/./_app/pages\\Person\\index.svelte-c3e66452.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null},"src/routes/Search/index.svelte":{"entry":"/./_app/pages\\Search\\index.svelte-95512715.js","css":[],"js":["/./_app/pages\\Search\\index.svelte-95512715.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null},"src/routes/Cube/index.svelte":{"entry":"/./_app/pages\\Cube\\index.svelte-665fa2b8.js","css":[],"js":["/./_app/pages\\Cube\\index.svelte-665fa2b8.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null},"src/routes/Help/index.svelte":{"entry":"/./_app/pages\\Help\\index.svelte-ac42836d.js","css":[],"js":["/./_app/pages\\Help\\index.svelte-ac42836d.js","/./_app/chunks/vendor-1b4cc086.js"],"styles":null}};

async function load_component(file) {
	if (!module_lookup[file]) {
		console.log({ file });
	}
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

export function render(request, {
	paths = {"base":"","assets":"/."},
	local = false,
	dependencies,
	only_render_prerenderable_pages = false,
	get_static_file
} = {}) {
	return ssr({
		...request,
		host: request.headers["host"]
	}, {
		paths,
		local,
		template,
		manifest,
		load_component,
		target: "#svelte",
		entry: "/./_app/start-83637269.js",
		root,
		hooks,
		dev: false,
		amp: false,
		dependencies,
		only_render_prerenderable_pages,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => error.stack,
		get_static_file,
		ssr: true,
		router: true,
		hydrate: true
	});
}