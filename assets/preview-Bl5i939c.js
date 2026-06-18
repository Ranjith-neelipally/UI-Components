import{j as r}from"./tslib.es6-DItdwr9I.js";import{r as a}from"./index-l2PZgWEW.js";import{p as e,g as d,c as x,n as g}from"./index-uMjDO6cE.js";const h=e.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 99999;
  font-family: 'Poppins', sans-serif;
`,u=e.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${({$color:t})=>t};
  border: 2px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`,f=e.div`
  position: absolute;
  top: 54px;
  right: 0;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  width: 220px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #f3f4f6;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,l=e.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #9ca3af;
`,b=e.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    padding: 0;
    
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    &::-webkit-color-swatch {
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
    }
  }
`,m=e.span`
  font-family: monospace;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 8px;
  border-radius: 6px;
  flex: 1;
  text-align: center;
`,C=e.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-top: 4px;
`,j=e.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({$color:t})=>t};
  border: 2px solid ${({$active:t})=>t?"#ffffff":"transparent"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.15);
  }
`,w=["#CCCB75","#1A73E8","#0F9D58","#FF5722","#673AB7","#E91E63","#FFEB3B","#00BCD4","#8BC34A","#9E9E9E"],y=t=>{const[o,i]=a.useState(()=>localStorage.getItem("storybook_theme_color")||"#CCCB75"),[c,p]=a.useState(!1),n=d(o);return a.useEffect(()=>{x(o),localStorage.setItem("storybook_theme_color",o)},[o]),r.jsxs(g,{theme:n,children:[r.jsx("div",{style:{minHeight:"100vh",padding:"20px",boxSizing:"border-box",backgroundColor:n.surfaceDefault,color:n.primaryText,transition:"background-color 0.2s ease, color 0.2s ease"},children:r.jsx(t,{})}),r.jsxs(h,{children:[r.jsx(u,{$color:o,onClick:()=>p(!c),title:"Dynamic Theme Color Engine",children:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35857 19.5 5.5 20 5.5 20.5C5.5 21.3284 6.17157 22 7 22H12Z"}),r.jsx("circle",{cx:"7.5",cy:"10.5",r:"1.5",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7.5",r:"1.5",fill:"currentColor"}),r.jsx("circle",{cx:"16.5",cy:"9.5",r:"1.5",fill:"currentColor"}),r.jsx("circle",{cx:"15.5",cy:"14.5",r:"1.5",fill:"currentColor"})]})}),c&&r.jsxs(f,{children:[r.jsx(l,{children:"Theme Seed Color"}),r.jsxs(b,{children:[r.jsx("input",{type:"color",value:o,onChange:s=>i(s.target.value)}),r.jsx(m,{children:o.toUpperCase()})]}),r.jsx(l,{children:"Presets"}),r.jsx(C,{children:w.map(s=>r.jsx(j,{$color:s,$active:o.toUpperCase()===s.toUpperCase(),onClick:()=>i(s)},s))})]})]})]})},T={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Introduction","Welcome","*"]}}},decorators:[y]};export{T as default};
