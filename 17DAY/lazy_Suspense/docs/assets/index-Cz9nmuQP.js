const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Main-KEByEj6e.js","assets/vendor-react-CtW5r0F0.js","assets/vendor-react-router-dom-B-q0Ww0R.js","assets/vendor-react-dom-C8tn4tOK.js","assets/vendor-scheduler-CzFDRTuY.js","assets/vendor-react-router-CXFMuf2u.js","assets/vendor-@remix-run-I3CLtn5C.js","assets/data-C0-iocHs.js","assets/Detail-BTXOXUJR.js","assets/Search-xcNWFQDF.js","assets/vendor-korean-regexp-CymsD8IQ.js"])))=>i.map(i=>d[i]);
import{r as d,j as t}from"./vendor-react-CtW5r0F0.js";import{c as x}from"./vendor-react-dom-C8tn4tOK.js";import{a as E,d as v,e as f}from"./vendor-react-router-CXFMuf2u.js";import{B as _}from"./vendor-react-router-dom-B-q0Ww0R.js";import"./vendor-scheduler-CzFDRTuY.js";import"./vendor-@remix-run-I3CLtn5C.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const P="modulepreload",L=function(a){return"/"+a},p={},h=function(c,l,u){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),n=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(l.map(s=>{if(s=L(s),s in p)return;p[s]=!0;const m=s.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${y}`))return;const i=document.createElement("link");if(i.rel=m?"stylesheet":P,m||(i.as="script"),i.crossOrigin="",i.href=s,n&&i.setAttribute("nonce",n),document.head.appendChild(i),m)return new Promise((g,j)=>{i.addEventListener("load",g),i.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${s}`)))})}))}function o(r){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r}return e.then(r=>{for(const n of r||[])n.status==="rejected"&&o(n.reason);return c().catch(o)})},O=d.lazy(()=>h(()=>import("./Main-KEByEj6e.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),R=d.lazy(()=>h(()=>import("./Detail-BTXOXUJR.js"),__vite__mapDeps([8,1,7,5,6]))),S=d.lazy(()=>h(()=>import("./Search-xcNWFQDF.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,10])));function b(){const[a,c]=d.useState(""),l=E();return t.jsxs(t.Fragment,{children:[t.jsxs("header",{children:[t.jsx("h1",{children:"💚 동물 조아 💚"}),t.jsx("input",{value:a,onChange:u=>c(u.target.value)}),t.jsx("button",{onClick:()=>l(`/search?animal=${a}`),children:"검색"})]}),t.jsx(d.Suspense,{fallback:t.jsx("h1",{children:"로딩중 ..."}),children:t.jsxs(v,{children:[t.jsx(f,{path:"/",element:t.jsx(O,{})}),t.jsx(f,{path:"/detail/:id",element:t.jsx(R,{})}),t.jsx(f,{path:"/search",element:t.jsx(S,{})})]})}),t.jsx("footer",{children:"all rights reserved to OZ"})]})}x.createRoot(document.getElementById("root")).render(t.jsx(_,{children:t.jsx(b,{})}));