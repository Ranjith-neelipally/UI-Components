import{j as t}from"./tslib.es6-DItdwr9I.js";import{z as i,E as c,e as o}from"./index-DYjNDoEH.js";import"./index-l2PZgWEW.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const x={title:"Feedback/Toast",decorators:[e=>t.jsx(i,{children:t.jsx(e,{})})]},n=()=>{const{toast:e}=c();return t.jsxs("div",{style:{display:"flex",gap:"16px",padding:"24px"},children:[t.jsx(o,{onClick:()=>e.success("Server started successfully","System Info"),children:"Show Success"}),t.jsx(o,{onClick:()=>e.error("Database connection lost","Critical Alert"),children:"Show Error"}),t.jsx(o,{onClick:()=>e.warning("Node C limit exceeded","Warning"),children:"Show Warning"}),t.jsx(o,{onClick:()=>e.info("New updates available","Notice"),children:"Show Info"})]})};n.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var r,s,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const {
    toast
  } = useToast();
  return <div style={{
    display: "flex",
    gap: "16px",
    padding: "24px"
  }}>\r
      <Button onClick={() => toast.success("Server started successfully", "System Info")}>\r
        Show Success\r
      </Button>\r
      <Button onClick={() => toast.error("Database connection lost", "Critical Alert")}>\r
        Show Error\r
      </Button>\r
      <Button onClick={() => toast.warning("Node C limit exceeded", "Warning")}>\r
        Show Warning\r
      </Button>\r
      <Button onClick={() => toast.info("New updates available", "Notice")}>\r
        Show Info\r
      </Button>\r
    </div>;
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const h=["Interactive"];export{n as Interactive,h as __namedExportsOrder,x as default};
