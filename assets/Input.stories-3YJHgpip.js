import{i as h}from"./index-DYjNDoEH.js";import"./tslib.es6-DItdwr9I.js";import"./index-l2PZgWEW.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const k={title:"Forms/Input",component:h},e={args:{label:"Host Name",placeholder:"e.g. localhost"}},r={args:{label:"SSH Port",placeholder:"e.g. 22",error:"Port 22 is already allocated inside this network node."}},s={args:{label:"Database Connection",placeholder:"Postgres Connection Established",success:!0}},a={args:{label:"Audit Sockets Address",value:"10.0.1.25",disabled:!0}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Host Name",
    placeholder: "e.g. localhost"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "SSH Port",
    placeholder: "e.g. 22",
    error: "Port 22 is already allocated inside this network node."
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,p,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Database Connection",
    placeholder: "Postgres Connection Established",
    success: true
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Audit Sockets Address",
    value: "10.0.1.25",
    disabled: true
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const A=["Default","WithError","Success","Disabled"];export{e as Default,a as Disabled,s as Success,r as WithError,A as __namedExportsOrder,k as default};
