import{j as e}from"./tslib.es6-DItdwr9I.js";import{H as r,B as c,S as n,P as a,C as i,D as p,G as h,h as s}from"./index-DYjNDoEH.js";import"./index-l2PZgWEW.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const v={title:"Introduction"},t=()=>e.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(r,{level:1,children:"My Material Theme UI"}),e.jsx(c,{children:"v1.0.173"})]}),e.jsx(n,{y:8}),e.jsx(a,{children:"Welcome to the component library! This collection is built with **React**, **TypeScript**, and **Styled Components**, styled using the elegant **Poppins** font family."}),e.jsx(n,{y:24}),e.jsxs(i,{$padding:"24px",children:[e.jsx(r,{level:3,children:"🎨 Dynamic Color Engine"}),e.jsx(n,{y:12}),e.jsx(a,{children:"The core feature of this library is its **intelligent, contrast-safe HSL color generator**. By providing just a single primary seed color, the engine automatically calculates surfaces, borders, backgrounds, warning states, and highly accessible text contrasts."}),e.jsx(n,{y:12}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:600},children:"👉 Try it:"}),e.jsx("span",{style:{fontSize:"13px"},children:"Click the floating palette icon in the top-right corner of the Storybook screen to change the seed color and watch all components update instantly!"})]})]}),e.jsx(n,{y:32}),e.jsx(r,{level:2,children:"Component Categories"}),e.jsx(p,{margin:"16px 0"}),e.jsxs(h,{columns:2,gap:"20px",children:[e.jsx(s,{span:1,children:e.jsx("div",{style:{height:"100%"},children:e.jsxs(i,{children:[e.jsx(r,{level:4,children:"🏗️ Layout"}),e.jsx(n,{y:8}),e.jsxs(a,{children:["Responsive structural elements to form pages:",e.jsx("br",{}),"• Grid & Col, ContentWrapper, Divider, Spacer, RootContainer."]})]})})}),e.jsx(s,{span:1,children:e.jsx("div",{style:{height:"100%"},children:e.jsxs(i,{children:[e.jsx(r,{level:4,children:"🧭 Navigation"}),e.jsx(n,{y:8}),e.jsxs(a,{children:["Components to guide users through routes:",e.jsx("br",{}),"• TopNavBar, Breadcrumbs, Pagination, and the recursive SideNav."]})]})})}),e.jsx(s,{span:1,children:e.jsx("div",{style:{height:"100%"},children:e.jsxs(i,{children:[e.jsx(r,{level:4,children:"📝 Forms & Inputs"}),e.jsx(n,{y:8}),e.jsxs(a,{children:["Accessible controls for capturing user data:",e.jsx("br",{}),"• Input, TextArea, Select, Checkbox, Radio, Switch, Slider, FileUpload."]})]})})}),e.jsx(s,{span:1,children:e.jsx("div",{style:{height:"100%"},children:e.jsxs(i,{children:[e.jsx(r,{level:4,children:"🔔 Feedback & Display"}),e.jsx(n,{y:8}),e.jsxs(a,{children:["Alerts and interactive elements:",e.jsx("br",{}),"• Modal, Toast, Spinner, Banner, Tooltip, Badge, Table, Accordion."]})]})})})]})]});t.__docgenInfo={description:"",methods:[],displayName:"Welcome"};var l,o,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <div style={{
    maxWidth: "800px",
    margin: "0 auto",
    padding: "12px"
  }}>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>\r
        <Heading level={1}>My Material Theme UI</Heading>\r
        <Badge>v1.0.173</Badge>\r
      </div>\r
      <Spacer y={8} />\r
      <Paragraph>\r
        Welcome to the component library! This collection is built with **React**, **TypeScript**, and **Styled Components**, styled using the elegant **Poppins** font family.\r
      </Paragraph>\r
      <Spacer y={24} />\r
\r
      <Card $padding="24px">\r
        <Heading level={3}>🎨 Dynamic Color Engine</Heading>\r
        <Spacer y={12} />\r
        <Paragraph>\r
          The core feature of this library is its **intelligent, contrast-safe HSL color generator**. \r
          By providing just a single primary seed color, the engine automatically calculates surfaces, borders, backgrounds, warning states, and highly accessible text contrasts.\r
        </Paragraph>\r
        <Spacer y={12} />\r
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>\r
          <span style={{
          fontSize: "14px",
          fontWeight: 600
        }}>👉 Try it:</span>\r
          <span style={{
          fontSize: "13px"
        }}>\r
            Click the floating palette icon in the top-right corner of the Storybook screen to change the seed color and watch all components update instantly!\r
          </span>\r
        </div>\r
      </Card>\r
\r
      <Spacer y={32} />\r
      <Heading level={2}>Component Categories</Heading>\r
      <Divider margin="16px 0" />\r
\r
      <Grid columns={2} gap="20px">\r
        <Col span={1}>\r
          <div style={{
          height: "100%"
        }}>\r
            <Card>\r
              <Heading level={4}>🏗️ Layout</Heading>\r
              <Spacer y={8} />\r
              <Paragraph>\r
                Responsive structural elements to form pages:\r
                <br />\r
                • Grid & Col, ContentWrapper, Divider, Spacer, RootContainer.\r
              </Paragraph>\r
            </Card>\r
          </div>\r
        </Col>\r
        <Col span={1}>\r
          <div style={{
          height: "100%"
        }}>\r
            <Card>\r
              <Heading level={4}>🧭 Navigation</Heading>\r
              <Spacer y={8} />\r
              <Paragraph>\r
                Components to guide users through routes:\r
                <br />\r
                • TopNavBar, Breadcrumbs, Pagination, and the recursive SideNav.\r
              </Paragraph>\r
            </Card>\r
          </div>\r
        </Col>\r
        <Col span={1}>\r
          <div style={{
          height: "100%"
        }}>\r
            <Card>\r
              <Heading level={4}>📝 Forms & Inputs</Heading>\r
              <Spacer y={8} />\r
              <Paragraph>\r
                Accessible controls for capturing user data:\r
                <br />\r
                • Input, TextArea, Select, Checkbox, Radio, Switch, Slider, FileUpload.\r
              </Paragraph>\r
            </Card>\r
          </div>\r
        </Col>\r
        <Col span={1}>\r
          <div style={{
          height: "100%"
        }}>\r
            <Card>\r
              <Heading level={4}>🔔 Feedback & Display</Heading>\r
              <Spacer y={8} />\r
              <Paragraph>\r
                Alerts and interactive elements:\r
                <br />\r
                • Modal, Toast, Spinner, Banner, Tooltip, Badge, Table, Accordion.\r
              </Paragraph>\r
            </Card>\r
          </div>\r
        </Col>\r
      </Grid>\r
    </div>;
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const j=["Welcome"];export{t as Welcome,j as __namedExportsOrder,v as default};
