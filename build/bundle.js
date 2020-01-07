var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.$$.on_destroy.push(function(t,n){const e=t.subscribe(n);return e.unsubscribe?()=>e.unsubscribe():e}(n,e))}function s(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function i(t,n,e=n){return t.set(e),n}function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}let h;function m(t){h=t}const g=[],y=[],x=[],b=[],w=Promise.resolve();let _=!1;function v(t){x.push(t)}function E(){const t=new Set;do{for(;g.length;){const t=g.shift();m(t),C(t.$$)}for(;y.length;)y.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];t.has(e)||(e(),t.add(e))}x.length=0}while(g.length);for(;b.length;)b.pop()();_=!1}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const k=new Set;let N;function j(t,n){t&&t.i&&(k.delete(t),t.i(n))}function G(t,n,e,o){if(t&&t.o){if(k.has(t))return;k.add(t),N.c.push(()=>{k.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function L(t){t&&t.c()}function O(t,e,c){const{fragment:u,on_mount:s,on_destroy:i,after_update:a}=t.$$;u&&u.m(e,c),v(()=>{const e=s.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(v)}function P(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,w.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(n,r,c,u,s,i,a=[-1]){const l=h;m(n);const f=r.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:a};let p=!1;d.ctx=c?c(n,f,(t,e,o=e)=>(d.ctx&&s(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&S(n,t)),e)):[],d.update(),p=!0,o(d.before_update),d.fragment=!!u&&u(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&j(n.$$.fragment),O(n,r.target,r.anchor),E()),m(l)}class q{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const A=[];function B(n,e=t){let o;const r=[];function u(t){if(c(n,t)&&(n=t,o)){const t=!A.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),A.push(e,n)}if(t){for(let t=0;t<A.length;t+=2)A[t][0](A[t+1]);A.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(c,s=t){const i=[c,s];return r.push(i),1===r.length&&(o=e(u)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function T(t){let n;const e=t[6].default,o=function(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}(e,t,t[5],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,n){o&&o.p&&32&n&&o.p(s(e,t,t[5],null),function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(e,t[5],n,null))},i(t){n||(j(o,t),n=!0)},o(t){G(o,t),n=!1},d(t){o&&o.d(t)}}}function z(t){let n,e,r=(void 0===t[0]||t[0]===t[2]&&void 0===t[1]||t[1]===t[3])&&T(t);return{c(){r&&r.c(),n=d("")},m(t,o){r&&r.m(t,o),a(t,n,o),e=!0},p(t,[e]){void 0===t[0]||t[0]===t[2]&&void 0===t[1]||t[1]===t[3]?r?(r.p(t,e),j(r,1)):(r=T(t),r.c(),j(r,1),r.m(n.parentNode,n)):r&&(N={r:0,c:[],p:N},G(r,1,1,()=>{r=null}),N.r||o(N.c),N=N.p)},i(t){e||(j(r),e=!0)},o(t){G(r),e=!1},d(t){r&&r.d(t),t&&l(n)}}}const D=B(window.location.pathname),F=B(window.location.hash.slice(1)),H=t=>{history.pushState(null,document.title,t),window.dispatchEvent(new Event("popstate"))};function I(n,e,o){let r,c,s=t,a=t;u(n,D,t=>o(2,r=t)),u(n,F,t=>o(3,c=t)),n.$$.on_destroy.push(()=>s()),n.$$.on_destroy.push(()=>a());let{path:l}=e,{hash:f}=e,{title:d=document.title}=e;(void 0===l||l===r&&void 0===f||f===c)&&window.addEventListener("popstate",()=>{i(D,r=window.location.pathname),i(F,c=window.location.hash.slice(1)),document.title=d});let{$$slots:p={},$$scope:$}=e;return n.$set=t=>{"path"in t&&o(0,l=t.path),"hash"in t&&o(1,f=t.hash),"title"in t&&o(4,d=t.title),"$$scope"in t&&o(5,$=t.$$scope)},[l,f,r,c,d,$,p]}class J extends q{constructor(t){super(),M(this,t,I,z,c,{path:0,hash:1,title:4})}}function K(n){let e,o,r,c;return{c(){e=f("p"),e.textContent="Go to path '/'",o=p(),r=f("button"),r.textContent="Go to path '/lalala'",c=$(r,"click",n[0])},m(t,n){a(t,e,n),a(t,o,n),a(t,r,n)},p:t,d(t){t&&l(e),t&&l(o),t&&l(r),c()}}}function Q(n){let e,o,r,c;return{c(){e=f("p"),e.textContent="Path '/lalala'",o=p(),r=f("button"),r.textContent="Go to path '/' hash 'lol'",c=$(r,"click",n[1])},m(t,n){a(t,e,n),a(t,o,n),a(t,r,n)},p:t,d(t){t&&l(e),t&&l(o),t&&l(r),c()}}}function R(t){let n;return{c(){n=f("p"),n.textContent="Path '/' hash ''"},m(t,e){a(t,n,e)},d(t){t&&l(n)}}}function U(t){let n,e,o;const r=new J({props:{path:"/",$$slots:{default:[K]},$$scope:{ctx:t}}}),c=new J({props:{path:"/lalala",$$slots:{default:[Q]},$$scope:{ctx:t}}}),u=new J({props:{path:"/",hash:"lol",$$slots:{default:[R]},$$scope:{ctx:t}}});return{c(){L(r.$$.fragment),n=p(),L(c.$$.fragment),e=p(),L(u.$$.fragment)},m(t,s){O(r,t,s),a(t,n,s),O(c,t,s),a(t,e,s),O(u,t,s),o=!0},p(t,[n]){const e={};4&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),u.$set(s)},i(t){o||(j(r.$$.fragment,t),j(c.$$.fragment,t),j(u.$$.fragment,t),o=!0)},o(t){G(r.$$.fragment,t),G(c.$$.fragment,t),G(u.$$.fragment,t),o=!1},d(t){P(r,t),t&&l(n),P(c,t),t&&l(e),P(u,t)}}}function V(t){return[()=>H("/lalala"),()=>H("/#lol")]}return new class extends q{constructor(t){super(),M(this,t,V,U,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map