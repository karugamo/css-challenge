import{s as i,r as g,j as s,i as b,a,R as v,b as w}from"./vendor.a90ecbc8.js";const C=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};C();function x({language:r,onChange:c,defaultValue:o,levelId:l}){const e=`editor-${l}-${r}`,t=g.exports.useRef();return d(),s(I,{children:s(b,{height:"37vh",theme:"vs-dark",loading:"",options:{overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,minimap:{enabled:!1}},onMount:f,defaultLanguage:r,onChange:m,defaultValue:o})});function d(){g.exports.useEffect(()=>{const n=localStorage.getItem(e);h(n!=null?n:o)},[l])}function h(n){var u;(u=t==null?void 0:t.current)==null||u.setValue(n),c(n)}function f(n){t.current=n;const u=localStorage.getItem(e);u!==null&&(n.setValue(u||""),c(u||""))}function m(n){n&&(c(n),localStorage.setItem(e,n))}}const I=i.div`
  border-radius: 6px;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 20px;
`;function $({image:r}){return s(L,{children:s(j,{src:r})})}const j=i.img`
  height: 37vh;
  width: 50%;
  object-fit: contain;
`,L=i.div`
  height: 37vh;
  background-color: white;
  padding: 16px;
  margin: 20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`,R="tweet-button",S="Tweet Button",k="<button>Tweet</button>",T=`button {
}`,B="tweet-button.png";var E={id:R,title:S,html:k,css:T,image:B};const O="tags",P="Tags",M="",N="",V="tags.png";var D={id:O,title:P,html:M,css:N,image:V};const p=[E,D];function F(){const[r,c]=g.exports.useState(0),o=p[r],[l,e]=g.exports.useState(o.html),[t,d]=g.exports.useState(o.css),h=`    
    <html style="height: 100%;">
      <head>
        <style>${t}</style>
      </head>
      <body style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
        ${l}
      </body>
    </html>
`;return a(q,{children:[a(z,{children:[a(J,{children:[s(x,{onChange:n=>e(n),language:"html",levelId:o.id,defaultValue:o.html}),s(x,{onChange:n=>d(n),language:"css",levelId:o.id,defaultValue:o.css})]}),a(Q,{children:[s(H,{sandbox:"",srcDoc:h}),s($,{image:o.image})]})]}),a(K,{children:[a(A,{children:["Challenge ",r+1," of ",p.length,":"," ",o.title]}),a(G,{children:[r>0&&s(y,{onClick:m,children:"Previous"}),r<p.length-1&&s(y,{onClick:f,children:"Next"})]})]})]});function f(){c(r+1)}function m(){c(r-1)}}const A=i.h2`
  margin: 0;
  font-size: 1.2rem;
`,G=i.div`
  display: flex;
  gap: 1rem;
`,y=i.button`
  border: none;
  background-color: #f7c4de;
  padding: 8px 16px;
  border-radius: 6px;
  color: #4c3c44;
  font-weight: bold;
  cursor: pointer;
`,K=i.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`,q=i.div`
  background-color: lightsteelblue;
  height: 100vh;
`,z=i.div`
  display: flex;
  flex-direction: row;
`,H=i.iframe`
  background-color: white;
  border: none;
  height: 37vh;
  margin: 20px;
  padding: 16px;
  border-radius: 6px;
`,J=i.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`,Q=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;v.render(s(w.StrictMode,{children:s(F,{})}),document.getElementById("root"));
