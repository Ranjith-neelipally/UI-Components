import{F as u}from"./index-DYjNDoEH.js";import"./tslib.es6-DItdwr9I.js";import"./index-l2PZgWEW.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const x={title:"Forms/FileUpload",component:u},e={args:{label:"Telemetry Config JSON",accept:".json",multiple:!1,maxSizeMB:5}},a={args:{label:"Select System Logs",accept:".log,.txt",multiple:!0,maxSizeMB:10}},r={args:{label:"Disabled File Input",disabled:!0}};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Telemetry Config JSON",
    accept: ".json",
    multiple: false,
    maxSizeMB: 5
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Select System Logs",
    accept: ".log,.txt",
    multiple: true,
    maxSizeMB: 10
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Disabled File Input",
    disabled: true
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const D=["Default","Multiple","Disabled"];export{e as Default,r as Disabled,a as Multiple,D as __namedExportsOrder,x as default};
