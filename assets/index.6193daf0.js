import{s as i,j as n,i as m,r as f,a as h,R as p,b as y}from"./vendor.a90ecbc8.js";const x=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};x();function g({language:o,onChange:r,defaultValue:s,levelId:l}){const e=`editor-${l}-${o}`;return n(b,{children:n(m,{height:"40vh",theme:"vs-dark",loading:"",options:{overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,minimap:{enabled:!1}},onMount:t,defaultLanguage:o,onChange:c,defaultValue:s})});function t(d){const u=localStorage.getItem(e);u!==null&&(d.setValue(u||""),r(u||""))}function c(d){d&&(r(d),localStorage.setItem(e,d))}}const b=i.div`
  border-radius: 6px;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 20px;
`;function v({image:o}){return n(C,{children:n(w,{src:o})})}const w=i.img`
  height: 40vh;
  width: 50%;
  object-fit: contain;
`,C=i.div`
  height: 40vh;
  background-color: white;
  padding: 16px;
  margin: 20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`,I="tweet-button",j="<button>Tweet</button>",R=`button {
}`,L="tweet-button.png";var O={id:I,html:j,css:R,image:L};const a=O;function S(){const[o,r]=f.exports.useState(a.html),[s,l]=f.exports.useState(a.css),e=`    
    <html style="height: 100%;">
      <head>
        <style>${s}</style>
      </head>
      <body style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
        ${o}
      </body>
    </html>
`;return h($,{children:[h(E,{children:[n(g,{onChange:t=>r(t),language:"html",levelId:a.id,defaultValue:o}),n(g,{onChange:t=>l(t),language:"css",levelId:a.id,defaultValue:s})]}),h(M,{children:[n(k,{sandbox:"",srcDoc:e}),n(v,{image:a.image})]})]})}const $=i.div`
  display: flex;
  flex-direction: row;
  background-color: lightsteelblue;
  height: 100vh;
`,k=i.iframe`
  background-color: white;
  border: none;
  height: 40vh;
  margin: 20px;
  padding: 16px;
  border-radius: 6px;
`,E=i.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`,M=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;p.render(n(y.StrictMode,{children:n(S,{})}),document.getElementById("root"));
