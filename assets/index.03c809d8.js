import{s as i,r as g,j as s,i as y,a as d,R as v,b as w}from"./vendor.a90ecbc8.js";const C=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};C();function x({language:r,onChange:l,defaultValue:o,levelId:c}){const e=`editor-${c}-${r}`,t=g.exports.useRef();return a(),s(L,{children:s(y,{height:"37vh",theme:"vs-dark",loading:"",options:{overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,minimap:{enabled:!1}},onMount:f,defaultLanguage:r,onChange:p,defaultValue:o})});function a(){g.exports.useEffect(()=>{const n=localStorage.getItem(e);h(n!=null?n:o)},[c])}function h(n){var u;(u=t==null?void 0:t.current)==null||u.setValue(n),l(n)}function f(n){t.current=n;const u=localStorage.getItem(e);u!==null&&(n.setValue(u||""),l(u||""))}function p(n){n&&(l(n),localStorage.setItem(e,n))}}const L=i.div`
  border-radius: 6px;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 20px;
`;function I({image:r}){return s(j,{children:s(k,{src:r})})}const k=i.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`,j=i.div`
  height: 37vh;
  background-color: white;
  padding: 16px;
  margin: 20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;var R=[{id:"tweet-button",title:"Tweet Button",html:"<button>Tweet</button>",css:`button {
}`,image:"tweet-button.png"},{id:"tags",title:"Tags",html:"",css:"",image:"tags.png"},{id:"news",title:"News",html:"",css:"",image:"news.png"},{id:"facebook-create-story",title:"Facebook Create Story",html:"",css:"",image:"facebook-create-story.png"},{id:"github-repo-card",title:"GitHub Repository Card",html:`<img src="https://avatars.githubusercontent.com/u/9919?v=4&s=40" alt="GitHub" width="20" height="20" />
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>`,css:"",image:"github-repo-card.png"}];const m=R;function S(){const[r,l]=g.exports.useState(0),o=m[r],[c,e]=g.exports.useState(o.html),[t,a]=g.exports.useState(o.css),h=`    
    <html style="height: 100%;">
      <head>
        <style>${t}</style>
      </head>
      <body style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
        ${c}
      </body>
    </html>
`;return d(M,{children:[d(N,{children:[d(P,{children:[s(x,{onChange:n=>e(n),language:"html",levelId:o.id,defaultValue:o.html}),s(x,{onChange:n=>a(n),language:"css",levelId:o.id,defaultValue:o.css})]}),d($,{children:[s(O,{sandbox:"",srcDoc:h}),s(I,{image:o.image})]})]}),d(E,{children:[d(B,{children:["Challenge ",r+1," of ",m.length,":"," ",o.title]}),d(T,{children:[r>0&&s(b,{onClick:p,children:"Previous"}),r<m.length-1&&s(b,{onClick:f,children:"Next"})]})]})]});function f(){l(r+1)}function p(){l(r-1)}}const B=i.h2`
  margin: 0;
  font-size: 1.2rem;
`,T=i.div`
  display: flex;
  gap: 1rem;
`,b=i.button`
  border: none;
  background-color: #f7c4de;
  padding: 8px 16px;
  border-radius: 6px;
  color: #4c3c44;
  font-weight: bold;
  cursor: pointer;
`,E=i.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`,M=i.div`
  background-color: lightsteelblue;
  height: 100vh;
`,N=i.div`
  display: flex;
  flex-direction: row;
`,O=i.iframe`
  background-color: white;
  border: none;
  height: 37vh;
  margin: 20px;
  padding: 16px;
  border-radius: 6px;
`,P=i.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`,$=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;v.render(s(w.StrictMode,{children:s(S,{})}),document.getElementById("root"));
