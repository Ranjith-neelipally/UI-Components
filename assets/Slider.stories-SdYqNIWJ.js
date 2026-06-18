import{j as r}from"./tslib.es6-DItdwr9I.js";import{r as u}from"./index-l2PZgWEW.js";import{q as t}from"./index-DYjNDoEH.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const f={title:"Forms/Slider",component:t},e=()=>{const[m,p]=u.useState(42);return r.jsx("div",{style:{maxWidth:"320px"},children:r.jsx(t,{label:"Cluster Nodes Limit",value:m,min:0,max:100,onChange:c=>p(parseInt(c.target.value,10))})})},a=()=>r.jsx("div",{style:{maxWidth:"320px"},children:r.jsx(t,{label:"Read Only Bandwidth",value:15,disabled:!0})});e.__docgenInfo={description:"",methods:[],displayName:"DefaultSlider"};a.__docgenInfo={description:"",methods:[],displayName:"DisabledSlider"};var s,d,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [val, setVal] = useState(42);
  return <div style={{
    maxWidth: "320px"
  }}>\r
      <Slider label="Cluster Nodes Limit" value={val} min={0} max={100} onChange={e => setVal(parseInt(e.target.value, 10))} />\r
    </div>;
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,o,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div style={{
  maxWidth: "320px"
}}>\r
    <Slider label="Read Only Bandwidth" value={15} disabled />\r
  </div>`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["DefaultSlider","DisabledSlider"];export{e as DefaultSlider,a as DisabledSlider,g as __namedExportsOrder,f as default};
