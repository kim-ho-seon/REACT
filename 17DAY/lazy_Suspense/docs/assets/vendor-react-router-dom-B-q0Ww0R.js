import{r as c,R as A}from"./vendor-react-CtW5r0F0.js";import"./vendor-react-dom-C8tn4tOK.js";import{R as F,N as k,u as j,a as P,b as T,c as x}from"./vendor-react-router-CXFMuf2u.js";import{c as B,s as N,b as g}from"./vendor-@remix-run-I3CLtn5C.js";/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},R.apply(this,arguments)}function K(e,r){if(e==null)return{};var a={},t=Object.keys(e),n,s;for(s=0;s<t.length;s++)n=t[s],!(r.indexOf(n)>=0)&&(a[n]=e[n]);return a}function V(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I(e,r){return e.button===0&&(!r||r==="_self")&&!V(e)}function w(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((r,a)=>{let t=e[a];return r.concat(Array.isArray(t)?t.map(n=>[a,n]):[[a,t]])},[]))}function W(e,r){let a=w(e);return r&&r.forEach((t,n)=>{a.has(n)||r.getAll(n).forEach(s=>{a.append(n,s)})}),a}const z=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],M="6";try{window.__reactRouterVersion=M}catch{}const G="startTransition",y=A[G];function $(e){let{basename:r,children:a,future:t,window:n}=e,s=c.useRef();s.current==null&&(s.current=B({window:n,v5Compat:!0}));let i=s.current,[l,u]=c.useState({action:i.action,location:i.location}),{v7_startTransition:o}=t||{},f=c.useCallback(h=>{o&&y?y(()=>u(h)):u(h)},[u,o]);return c.useLayoutEffect(()=>i.listen(f),[i,f]),c.createElement(F,{basename:r,children:a,location:l.location,navigationType:l.action,navigator:i,future:t})}const X=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",q=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=c.forwardRef(function(r,a){let{onClick:t,relative:n,reloadDocument:s,replace:i,state:l,target:u,to:o,preventScrollReset:f,unstable_viewTransition:h}=r,d=K(r,z),{basename:E}=c.useContext(k),v,S=!1;if(typeof o=="string"&&q.test(o)&&(v=o,X))try{let p=new URL(window.location.href),m=o.startsWith("//")?new URL(p.protocol+o):new URL(o),b=N(m.pathname,E);m.origin===p.origin&&b!=null?o=b+m.search+m.hash:S=!0}catch{}let C=j(o,{relative:n}),_=H(o,{replace:i,state:l,target:u,preventScrollReset:f,relative:n,unstable_viewTransition:h});function O(p){t&&t(p),p.defaultPrevented||_(p)}return c.createElement("a",R({},d,{href:v||C,onClick:S||s?t:O,ref:a,target:u}))});var U;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(U||(U={}));var L;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(L||(L={}));function H(e,r){let{target:a,replace:t,state:n,preventScrollReset:s,relative:i,unstable_viewTransition:l}=r===void 0?{}:r,u=P(),o=T(),f=x(e,{relative:i});return c.useCallback(h=>{if(I(h,a)){h.preventDefault();let d=t!==void 0?t:g(o)===g(f);u(e,{replace:d,state:n,preventScrollReset:s,relative:i,unstable_viewTransition:l})}},[o,u,f,t,n,a,e,s,i,l])}function ee(e){let r=c.useRef(w(e)),a=c.useRef(!1),t=T(),n=c.useMemo(()=>W(t.search,a.current?null:r.current),[t.search]),s=P(),i=c.useCallback((l,u)=>{const o=w(typeof l=="function"?l(n):l);a.current=!0,s("?"+o,u)},[s,n]);return[n,i]}export{$ as B,D as L,ee as u};
