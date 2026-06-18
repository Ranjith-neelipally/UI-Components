import{j as e}from"./tslib.es6-DItdwr9I.js";import{r as d}from"./index-l2PZgWEW.js";import{M as l,e as n}from"./index-DYjNDoEH.js";import"./index-uMjDO6cE.js";import"./index-CaNG7YX3.js";const x={title:"Feedback/Modal",component:l},o=()=>{const[r,t]=d.useState(!1);return e.jsxs("div",{style:{padding:"24px"},children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Modal Dialog"}),e.jsx(l,{isOpen:r,onClose:()=>t(!1),title:"Telemetry Sockets Audit",footer:e.jsx(n,{onClick:()=>t(!1),children:"Close"}),children:e.jsx("div",{style:{padding:"16px",color:"#9ca3af",fontSize:"14px",lineHeight:"1.5"},children:"This dialog displays live audits of network connections. The backdrop is blurred dynamically."})})]})};o.__docgenInfo={description:"",methods:[],displayName:"DefaultModal"};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div style={{
    padding: "24px"
  }}>\r
      <Button onClick={() => setOpen(true)}>Open Modal Dialog</Button>\r
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Telemetry Sockets Audit" footer={<Button onClick={() => setOpen(false)}>Close</Button>}>\r
        <div style={{
        padding: "16px",
        color: "#9ca3af",
        fontSize: "14px",
        lineHeight: "1.5"
      }}>\r
          This dialog displays live audits of network connections. The backdrop is blurred dynamically.\r
        </div>\r
      </Modal>\r
    </div>;
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["DefaultModal"];export{o as DefaultModal,y as __namedExportsOrder,x as default};
