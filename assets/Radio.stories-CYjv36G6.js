import{j as e}from"./tslib.es6-DItdwr9I.js";import{r as m}from"./index-l2PZgWEW.js";import{R as i,m as a}from"./index-DYjNDoEH.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const S={title:"Forms/Radio",component:i},o=()=>{const[r,n]=m.useState("option1");return e.jsxs(i,{value:r,onChange:n,children:[e.jsx(a,{value:"option1",children:"Deployment Option A"}),e.jsx(a,{value:"option2",children:"Deployment Option B"}),e.jsx(a,{value:"option3",disabled:!0,children:"Deployment Option C (Disabled)"})]})},t=()=>{const[r,n]=m.useState("column");return e.jsxs(i,{value:r,onChange:n,direction:"row",children:[e.jsx(a,{value:"row",children:"Horizontal Layout"}),e.jsx(a,{value:"column",children:"Vertical Layout"})]})};o.__docgenInfo={description:"",methods:[],displayName:"DefaultRadioGroup"};t.__docgenInfo={description:"",methods:[],displayName:"RowRadioGroup"};var s,d,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState("option1");
  return <RadioGroup value={selected} onChange={setSelected}>\r
      <Radio value="option1">Deployment Option A</Radio>\r
      <Radio value="option2">Deployment Option B</Radio>\r
      <Radio value="option3" disabled>\r
        Deployment Option C (Disabled)\r
      </Radio>\r
    </RadioGroup>;
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState("column");
  return <RadioGroup value={selected} onChange={setSelected} direction="row">\r
      <Radio value="row">Horizontal Layout</Radio>\r
      <Radio value="column">Vertical Layout</Radio>\r
    </RadioGroup>;
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const D=["DefaultRadioGroup","RowRadioGroup"];export{o as DefaultRadioGroup,t as RowRadioGroup,D as __namedExportsOrder,S as default};
