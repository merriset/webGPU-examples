(()=>{"use strict";var e={562:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(537),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,'.grid {\n    display: grid;\n    height: calc(100vh - 20px);\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: 100%;\n }\n .grid1 {\n    display: grid;\n    height: 35px;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: 35px;\n }\n .item1 {\n    grid-column: 1/3;\n }\n .item2 {\n    grid-column: 3/9;\n }\n .item3 {\n    grid-column: 1/4;\n }\n .item4 {\n    grid-column: 4/8;\n }\n\n select, input[type="text"]{\n    width:100%;\n    height:22px;\n    box-sizing:border-box;\n }',"",{version:3,sources:["webpack://./src/site.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,0BAA0B;IAC1B,qCAAqC;IACrC,wBAAwB;CAC3B;CACA;IACG,aAAa;IACb,YAAY;IACZ,qCAAqC;IACrC,wBAAwB;CAC3B;CACA;IACG,gBAAgB;CACnB;CACA;IACG,gBAAgB;CACnB;CACA;IACG,gBAAgB;CACnB;CACA;IACG,gBAAgB;CACnB;;CAEA;IACG,UAAU;IACV,WAAW;IACX,qBAAqB;CACxB",sourcesContent:['.grid {\r\n    display: grid;\r\n    height: calc(100vh - 20px);\r\n    grid-template-columns: repeat(8, 1fr);\r\n    grid-template-rows: 100%;\r\n }\r\n .grid1 {\r\n    display: grid;\r\n    height: 35px;\r\n    grid-template-columns: repeat(8, 1fr);\r\n    grid-template-rows: 35px;\r\n }\r\n .item1 {\r\n    grid-column: 1/3;\r\n }\r\n .item2 {\r\n    grid-column: 3/9;\r\n }\r\n .item3 {\r\n    grid-column: 1/4;\r\n }\r\n .item4 {\r\n    grid-column: 4/8;\r\n }\r\n\r\n select, input[type="text"]{\r\n    width:100%;\r\n    height:22px;\r\n    box-sizing:border-box;\r\n }'],sourceRoot:""}]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},537:e=>{e.exports=function(e){var n=e[1],r=e[3];if(!r)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=r(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var s=t(e,o),u=0;u<a.length;u++){var d=r(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{const e="// vertex shader\r\n\r\nstruct Output {\r\n    @builtin(position) Position : vec4<f32>,\r\n    @location(0) vColor : vec4<f32>,\r\n};\r\n\r\n@vertex\r\nfn vs_main(@builtin(vertex_index) VertexIndex: u32) -> Output {\r\n    var pos = array<vec2<f32>, 3>(\r\n        vec2<f32>(0.0, 0.5),\r\n        vec2<f32>(-0.5, -0.5),\r\n        vec2<f32>(0.5, -0.5)\r\n    );\r\n\r\n    var color = array<vec3<f32>, 3>(\r\n        vec3<f32>(1.0, 0.0, 0.0),\r\n        vec3<f32>(0.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 1.0)\r\n    );\r\n\r\n    var output: Output;\r\n    output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);\r\n    output.vColor = vec4<f32>(color[VertexIndex], 1.0);\r\n    return output;\r\n}\r\n\r\n// fragment shader\r\n\r\n@fragment\r\nfn fs_main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {\r\n    return vColor;\r\n}";var n=r(379),t=r.n(n),o=r(795),a=r.n(o),i=r(569),c=r.n(i),s=r(565),u=r.n(s),d=r(216),l=r.n(d),p=r(589),f=r.n(p),v=r(562),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),t()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const g=()=>{return n=void 0,r=void 0,o=function*(){var n;const r=(()=>{let e="Great, your current browser supports WebGPU!";navigator.gpu||(e='Your current browser does not support WebGPU! Make sure you are on a system \n                    with WebGPU enabled. Currently, WebGPU is supported in  \n                    <a href="https://www.google.com/chrome/canary/">Chrome canary</a>\n                    with the flag "enable-unsafe-webgpu" enabled. See the \n                    <a href="https://github.com/gpuweb/gpuweb/wiki/Implementation-Status"> \n                    Implementation Status</a> page for more details.   \n                    You can also use your regular Chrome to try a pre-release version of WebGPU via\n                    <a href="https://developer.chrome.com/origintrials/#/view_trial/118219490218475521">Origin Trial</a>.                \n                ');const n=document.getElementById("canvas-webgpu");if(n){const r=document.getElementsByClassName("item2")[0];function t(){n.width=r.offsetWidth,n.height=r.offsetHeight}n.width=r.offsetWidth,n.height=r.offsetHeight,window.addEventListener("resize",t)}return e})();if(r.includes("Your current browser does not support WebGPU!"))throw console.log(r),"Your current browser does not support WebGPU!";const t=document.getElementById("canvas-webgpu"),o=yield null===(n=navigator.gpu)||void 0===n?void 0:n.requestAdapter(),a=yield null==o?void 0:o.requestDevice(),i=t.getContext("webgpu"),c="bgra8unorm";i.configure({device:a,format:c});const s=a.createRenderPipeline({layout:"auto",vertex:{module:a.createShaderModule({code:e}),entryPoint:"vs_main"},fragment:{module:a.createShaderModule({code:e}),entryPoint:"fs_main",targets:[{format:c}]},primitive:{topology:"triangle-list"}}),u=a.createCommandEncoder(),d=i.getCurrentTexture().createView(),l=u.beginRenderPass({colorAttachments:[{view:d,clearValue:{r:.2,g:.247,b:.314,a:1},loadOp:"clear",storeOp:"store"}]});l.setPipeline(s),l.draw(3,1,0,0),l.end(),a.queue.submit([u.finish()])},new((t=void 0)||(t=Promise))((function(e,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(n){var r;n.done?e(n.value):(r=n.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,c)}s((o=o.apply(n,r||[])).next())}));var n,r,t,o};g(),window.addEventListener("resize",(function(){g()}))})()})();
//# sourceMappingURL=main.bundle.js.map