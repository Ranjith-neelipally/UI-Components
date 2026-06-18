import{j as h}from"./tslib.es6-DItdwr9I.js";import{r as b}from"./index-l2PZgWEW.js";import{s as u}from"./index-DYjNDoEH.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const v={title:"Forms/Switch",component:u},r={args:{children:"Require TLS Encryptions"}},t={args:{children:"Locked Setting Option",disabled:!0}},e=()=>{const[s,S]=b.useState(!1);return h.jsxs(u,{checked:s,onChange:g=>S(g.target.checked),children:["TLS Active: ",String(s)]})};e.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var a,n,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Require TLS Encryptions"
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var o,i,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Locked Setting Option",
    disabled: true
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [enabled, setEnabled] = useState(false);
  return <Switch checked={enabled} onChange={e => setEnabled(e.target.checked)}>\r
      TLS Active: {String(enabled)}\r
    </Switch>;
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const w=["Default","Disabled","Interactive"];export{r as Default,t as Disabled,e as Interactive,w as __namedExportsOrder,v as default};
