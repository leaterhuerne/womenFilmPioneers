function $(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(O)}function P(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(W(n,e))}function at(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],u=Math.max(n.dirty.length,r.length);for(let s=0;s<u;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,o){if(r){const u=q(n,e,i,o);t.p(u,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t,n,e){return t.set(e),n}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<n.length;c++){const f=n[c];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const c=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=c?r+1:K(1,r,b=>n[e[b]].claim_order,c))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const o=[],u=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);s>=l;s--)u.push(n[s]);s--}for(;s>=0;s--)u.push(n[s]);o.reverse(),u.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<u.length;l++){for(;c<o.length&&u[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(u[l],f)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function yt(){return A(" ")}function gt(){return A("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $t(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t){return t===""?null:+t}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){Z(t);const o=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const s=t[u];if(n(s)){const l=e(s);return l===void 0?t.splice(u,1):t[u]=l,r||(t.claim_info.last_index=u),s}}for(let u=t.claim_info.last_index-1;u>=0;u--){const s=t[u];if(n(s)){const l=e(s);return l===void 0?t.splice(u,1):t[u]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function L(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const o=[];for(let u=0;u<r.attributes.length;u++){const s=r.attributes[u];e[s.name]||o.push(s.name)}o.forEach(u=>r.removeAttribute(u))},()=>i(n))}function Et(t,n,e){return L(t,n,e,V)}function Nt(t,n,e){return L(t,n,e,X)}function tt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function St(t){return tt(t," ")}function At(t,n){n=""+n,t.data!==n&&(t.data=n)}function jt(t,n){t.value=n??""}function Mt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function kt(t,n){return new t(n)}let y;function p(t){y=t}function T(){if(!y)throw new Error("Function called outside component initialization");return y}function Ct(t){T().$$.on_mount.push(t)}function Ot(t){T().$$.after_update.push(t)}const h=[],C=[];let m=[];const E=[],D=Promise.resolve();let N=!1;function z(){N||(N=!0,D.then(F))}function Pt(){return z(),D}function S(t){m.push(t)}function qt(t){E.push(t)}const v=new Set;let _=0;function F(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),nt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;E.length;)E.pop()();N=!1,v.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}function et(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const x=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Lt(){d.r||g(d.c),d=d.p}function it(t,n){t&&t.i&&(x.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const rt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...rt];function Dt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const u=t.$$.on_mount.map(O).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),o.forEach(S)}function lt(t,n){const e=t.$$;e.fragment!==null&&(et(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,o,u,s=[-1]){const l=y;p(t);const c=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:k(),dirty:s,skip_bound:!1,root:n.target||l.$$.root};u&&u(c.root);let f=!1;if(c.ctx=e?e(t,n.props||{},(a,b,...j)=>{const M=j.length?j[0]:b;return c.ctx&&r(c.ctx[a],c.ctx[a]=M)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](M),f&&ct(t,a)),b}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){G();const a=Y(n.target);c.fragment&&c.fragment.l(a),a.forEach(U)}else c.fragment&&c.fragment.c();n.intro&&it(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),J(),F()}p(l)}class It{$destroy(){lt(this,1),this.$destroy=$}$on(n,e){if(!P(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ut as A,lt as B,R as C,bt as D,$ as E,g as F,ot as G,ht as H,at as I,dt as J,_t as K,ft as L,pt as M,X as N,Nt as O,Dt as P,qt as Q,S as R,It as S,xt as T,jt as U,$t as V,P as W,vt as X,yt as a,mt as b,St as c,Tt as d,gt as e,Lt as f,it as g,U as h,Ht as i,Ot as j,V as k,Et as l,Y as m,wt as n,Ct as o,Mt as p,A as q,tt as r,st as s,Pt as t,At as u,Bt as v,C as w,kt as x,zt as y,Ft as z};
