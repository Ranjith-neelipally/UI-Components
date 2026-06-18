import{j as r}from"./tslib.es6-DItdwr9I.js";import{G as l,h as n}from"./index-DYjNDoEH.js";import"./index-l2PZgWEW.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const h={title:"Layout/Grid",component:l},s={padding:"16px",backgroundColor:"#1f2937",border:"1px solid rgba(249, 250, 251, 0.08)",borderRadius:"4px",textAlign:"center",color:"#f9fafb"},e={render:o=>r.jsxs(l,{...o,children:[r.jsx(n,{span:1,children:r.jsx("div",{style:s,children:"Col A (span 1)"})}),r.jsx(n,{span:1,children:r.jsx("div",{style:s,children:"Col B (span 1)"})}),r.jsx(n,{span:1,children:r.jsx("div",{style:s,children:"Col C (span 1)"})})]}),args:{columns:3,gap:"16px",alignItems:"stretch"}},a={render:o=>r.jsxs(l,{...o,children:[r.jsx(n,{span:4,children:r.jsx("div",{style:s,children:"Span 4"})}),r.jsx(n,{span:8,children:r.jsx("div",{style:s,children:"Span 8"})})]}),args:{columns:12,gap:"12px"}};var d,t,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Grid {...args}>\r
      <Col span={1}>\r
        <div style={boxStyle}>Col A (span 1)</div>\r
      </Col>\r
      <Col span={1}>\r
        <div style={boxStyle}>Col B (span 1)</div>\r
      </Col>\r
      <Col span={1}>\r
        <div style={boxStyle}>Col C (span 1)</div>\r
      </Col>\r
    </Grid>,
  args: {
    columns: 3,
    gap: "16px",
    alignItems: "stretch"
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,c,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Grid {...args}>\r
      <Col span={4}>\r
        <div style={boxStyle}>Span 4</div>\r
      </Col>\r
      <Col span={8}>\r
        <div style={boxStyle}>Span 8</div>\r
      </Col>\r
    </Grid>,
  args: {
    columns: 12,
    gap: "12px"
  }
}`,...(x=(c=a.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const v=["DefaultGrid","SpannedColumns"];export{e as DefaultGrid,a as SpannedColumns,v as __namedExportsOrder,h as default};
