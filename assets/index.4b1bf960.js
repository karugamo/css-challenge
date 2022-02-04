var L=Object.defineProperty,C=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var x=(r,t,o)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,p=(r,t)=>{for(var o in t||(t={}))k.call(t,o)&&x(r,o,t[o]);if(g)for(var o of g(t))I.call(t,o)&&x(r,o,t[o]);return r},b=(r,t)=>C(r,j(t));import{s as a,j as i,i as O,u as w,r as d,a as u,R as E,b as S}from"./vendor.46883d54.js";const D=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}};D();function y({language:r,onChange:t,defaultValue:o}){return i(P,{children:i(O,{height:"40vh",theme:"vs-dark",loading:"",options:{overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,minimap:{enabled:!1}},onMount:s,defaultLanguage:r,onChange:n,defaultValue:o})});function s(e){const c=localStorage.getItem(r);e.setValue(c||""),t(c||"")}function n(e,c){e&&t(e),r&&e&&localStorage.setItem(r,e)}}const P=a.div`
  border-radius: 6px;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 20px;
`;function U(){const{getInputProps:r,getRootProps:t}=w({onDrop:c}),[o,s]=d.exports.useState();return n(),e(),u(F,b(p({},t()),{children:[i("input",p({},r())),o?i(M,{src:o}):i("div",{children:"Drop an image here, or click to select a file to upload."})]}));function n(){d.exports.useEffect(()=>{document.onpaste=f=>{var m;const l=(m=f.clipboardData)==null?void 0:m.items[0];if((l==null?void 0:l.kind)!=="file")return;const h=l.getAsFile();h&&s(URL.createObjectURL(h))}},[])}function e(){d.exports.useEffect(()=>{o&&URL.revokeObjectURL(o)},[o])}function c(f){s(URL.createObjectURL(f[0]))}}const M=a.img`
  height: 40vh;
  width: 100%;
  object-fit: contain;
`,F=a.div`
  height: 40vh;
  background-color: white;
  padding: 16px;
  margin: 20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`,v='<button class="button">Click me</button>',R=`.button {
  border-radius: 8px;
}`;function V(){const[r,t]=d.exports.useState(v),[o,s]=d.exports.useState(R),n=`    
    <html>
      <head>
        <style>${o}</style>
      </head>
      <body>
        ${r}
      </body>
    </html>
`;return u($,{children:[u(N,{children:[i(y,{onChange:e=>t(e),language:"html",defaultValue:v}),i(y,{onChange:e=>s(e),language:"css",defaultValue:R})]}),u(B,{children:[i(A,{sandbox:"",srcDoc:n}),i(U,{})]})]})}const $=a.div`
  display: flex;
  flex-direction: row;
  background-color: lightsteelblue;
  height: 100vh;
`,A=a.iframe`
  background-color: white;
  border: none;
  height: 40vh;
  margin: 20px;
  padding: 16px;
  border-radius: 6px;
`,N=a.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`,B=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;E.render(i(S.StrictMode,{children:i(V,{})}),document.getElementById("root"));
