import{j as e}from"./tslib.es6-DItdwr9I.js";import{r}from"./index-l2PZgWEW.js";import{p as d}from"./index-DYjNDoEH.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const b={title:"Navigation/SideNav",component:d},m=[{id:"components",label:"Components",children:[{id:"layout",label:"Layout",children:[{id:"grid",label:"Grid",route:"/grid"},{id:"col",label:"Col",route:"/col"}]},{id:"typography",label:"Typography",children:[{id:"heading",label:"Heading",route:"/heading"}]}]},{id:"docs",label:"Documentation",children:[{id:"installation",label:"Installation",route:"/install"}]}],t=()=>{const[i,p]=r.useState("grid"),[o,c]=r.useState(!1);return e.jsxs("div",{style:{display:"flex",height:"400px",border:"1px solid rgba(249, 250, 251, 0.08)",borderRadius:"8px",overflow:"hidden"},children:[e.jsx(d,{items:m,activeRoute:i,onItemClick:n=>n.route&&p(n.route),collapsed:o}),e.jsxs("div",{style:{flex:1,padding:"24px"},children:[e.jsx("button",{onClick:()=>c(!o),style:{padding:"8px 16px",cursor:"pointer"},children:"Toggle Collapse"}),e.jsxs("div",{style:{marginTop:"16px"},children:["Active Path: ",i]})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var a,l,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [active, setActive] = useState("grid");
  const [collapsed, setCollapsed] = useState(false);
  return <div style={{
    display: "flex",
    height: "400px",
    border: "1px solid rgba(249, 250, 251, 0.08)",
    borderRadius: "8px",
    overflow: "hidden"
  }}>\r
      <SideNav items={items} activeRoute={active} onItemClick={(item: NavItem) => item.route && setActive(item.route)} collapsed={collapsed} />\r
      <div style={{
      flex: 1,
      padding: "24px"
    }}>\r
        <button onClick={() => setCollapsed(!collapsed)} style={{
        padding: "8px 16px",
        cursor: "pointer"
      }}>\r
          Toggle Collapse\r
        </button>\r
        <div style={{
        marginTop: "16px"
      }}>Active Path: {active}</div>\r
      </div>\r
    </div>;
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const y=["Interactive"];export{t as Interactive,y as __namedExportsOrder,b as default};
