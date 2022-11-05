const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["robots.txt"]),
	_: {
		mime: {".txt":"text/plain"},
		entry: {"file":"start-37e6690a.js","js":["start-37e6690a.js","chunks/vendor-d5bff233.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/compare\/?$/,
				params: null,
				path: "/compare",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		]
	}
});
