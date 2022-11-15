import{s,r as u,j as l,i as v,a as h,R as w,b as C}from"./vendor.a90ecbc8.js";const I=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};I();function b({language:i,onChange:c,defaultValue:o,levelId:a}){const e=`editor-${a}-${i}`,t=u.exports.useRef();return d(),l(L,{children:l(v,{height:"37vh",theme:"vs-dark",loading:"",options:{overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,minimap:{enabled:!1}},onMount:p,defaultLanguage:i,onChange:m,defaultValue:o})});function d(){u.exports.useEffect(()=>{const n=localStorage.getItem(e);f(n!=null?n:o)},[a])}function f(n){var r;(r=t==null?void 0:t.current)==null||r.setValue(n),c(n)}function p(n){t.current=n;const r=localStorage.getItem(e);r!==null&&(n.setValue(r||""),c(r||""))}function m(n){n&&(c(n),localStorage.setItem(e,n))}}const L=s.div`
  border-radius: 6px;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 20px;
`;function k({image:i}){return l(j,{children:l(R,{src:i})})}const R=s.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`,j=s.div`
  height: 37vh;
  background-color: white;
  padding: 16px;
  margin: 20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;var S=[{id:"tweet-button",title:"Tweet Button",html:"<button>Tweet</button>",css:`button {
}`,image:"tweet-button.png"},{id:"tags",title:"Tags",html:"",css:"",image:"tags.png"},{id:"news",title:"News",html:"",css:"",image:"news.png"},{id:"facebook-create-story",title:"Facebook Create Story",html:"",css:"",image:"facebook-create-story.png"},{id:"github-repo-card",title:"GitHub Repository Card",html:`<img src="https://avatars.githubusercontent.com/u/9919?v=4&s=40" alt="GitHub" width="20" height="20" />
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>`,css:"",image:"github-repo-card.png"}];const g=S;function E(){const[i,c]=u.exports.useState(0),o=g[i],[a,e]=u.exports.useState(o.html),[t,d]=u.exports.useState(o.css);p();const f=`    
    <html style="height: 100%;">
      <head>
        <style>${t}</style>
      </head>
      <body style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
        ${a}
      </body>
    </html>
`;return h(N,{children:[h(O,{children:[h($,{children:[l(b,{onChange:r=>e(r),language:"html",levelId:o.id,defaultValue:o.html}),l(b,{onChange:r=>d(r),language:"css",levelId:o.id,defaultValue:o.css})]}),h(V,{children:[l(P,{sandbox:"",srcDoc:f}),l(k,{image:o.image})]})]}),h(M,{children:[h(B,{children:["Challenge ",i+1," of ",g.length,":"," ",o.title]}),h(T,{children:[i>0&&l(y,{onClick:n,children:"Previous"}),i<g.length-1&&l(y,{onClick:m,children:"Next"})]})]})]});function p(){u.exports.useEffect(()=>{const r=window.location.hash.slice(1);g.find(x=>x.id===r)&&c(g.findIndex(x=>x.id===r))},[]),u.exports.useEffect(()=>{window.location.hash=o.id},[i])}function m(){c(i+1)}function n(){c(i-1)}}const B=s.h2`
  margin: 0;
  font-size: 1.2rem;
`,T=s.div`
  display: flex;
  gap: 1rem;
`,y=s.button`
  border: none;
  background-color: #f7c4de;
  padding: 8px 16px;
  border-radius: 6px;
  color: #4c3c44;
  font-weight: bold;
  cursor: pointer;
`,M=s.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`,N=s.div`
  background-color: lightsteelblue;
  height: 100vh;
`,O=s.div`
  display: flex;
  flex-direction: row;
`,P=s.iframe`
  background-color: white;
  border: none;
  height: 37vh;
  margin: 20px;
  padding: 16px;
  border-radius: 6px;
`,$=s.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`,V=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;w.render(l(C.StrictMode,{children:l(E,{})}),document.getElementById("root"));
