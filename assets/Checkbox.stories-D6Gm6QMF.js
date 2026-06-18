import{j as k}from"./tslib.es6-DItdwr9I.js";import{r as C}from"./index-l2PZgWEW.js";import{f as l}from"./index-DYjNDoEH.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const D={title:"Forms/Checkbox",component:l},r={args:{children:"Accept standard developer agreement guidelines"}},t={args:{children:"Locked option choice",disabled:!0}},e=()=>{const[c,u]=C.useState(!1);return k.jsxs(l,{checked:c,onChange:g=>u(g.target.checked),children:["Checked state: ",String(c)]})};e.__docgenInfo={description:"",methods:[],displayName:"InteractiveState"};var a,s,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Accept standard developer agreement guidelines"
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,d,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Locked option choice",
    disabled: true
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,m,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>\r
      Checked state: {String(checked)}\r
    </Checkbox>;
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const I=["Default","Disabled","InteractiveState"];export{r as Default,t as Disabled,e as InteractiveState,I as __namedExportsOrder,D as default};
