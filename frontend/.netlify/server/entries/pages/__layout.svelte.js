var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_2dc61825 = __toModule(require("../../chunks/index-2dc61825.js"));
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-w9k8tu{box-sizing:border-box}#app.svelte-w9k8tu{min-height:100vh}footer.svelte-w9k8tu{position:absolute;bottom:0}",
  map: null
};
const _layout = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"app"}" class="${"svelte-w9k8tu"}"><nav class="${"svelte-w9k8tu"}"><ul class="${"svelte-w9k8tu"}"><li class="${"svelte-w9k8tu"}"><a href="${"/"}" class="${"svelte-w9k8tu"}">Home</a></li>
			<li class="${"svelte-w9k8tu"}"><a href="${"/compare"}" class="${"svelte-w9k8tu"}">Compare</a></li>
			<li class="${"svelte-w9k8tu"}"><a href="${"/about"}" class="${"svelte-w9k8tu"}">About</a></li></ul></nav>
	<main class="${"svelte-w9k8tu"}">${slots.default ? slots.default({}) : ``}</main>
	<footer class="${"svelte-w9k8tu"}"><p class="${"svelte-w9k8tu"}">Here is some footer content</p></footer>
</div>`;
});
