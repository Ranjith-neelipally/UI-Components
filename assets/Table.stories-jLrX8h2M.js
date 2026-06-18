import{j as e}from"./tslib.es6-DItdwr9I.js";import{T as i,t as T,u as n,v as s,w as h,x as r,B as d}from"./index-DYjNDoEH.js";import"./index-l2PZgWEW.js";import"./index-CaNG7YX3.js";import"./index-uMjDO6cE.js";const j={title:"Data Display/Table",component:i},a={render:c=>e.jsxs(i,{...c,children:[e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(s,{children:"Pod ID"}),e.jsx(s,{children:"Memory Alloc"}),e.jsx(s,{children:"Uptime"}),e.jsx(s,{children:"Status"})]})}),e.jsxs(h,{children:[e.jsxs(n,{striped:!0,children:[e.jsx(r,{style:{fontFamily:"monospace",fontSize:"12px"},children:"kube-auth-4f"}),e.jsx(r,{children:"128 MB"}),e.jsx(r,{children:"14 days"}),e.jsx(r,{children:e.jsx(d,{variant:"subtle",colorType:"success",children:"Healthy"})})]}),e.jsxs(n,{children:[e.jsx(r,{style:{fontFamily:"monospace",fontSize:"12px"},children:"kube-db-12"}),e.jsx(r,{children:"1.2 GB"}),e.jsx(r,{children:"89 days"}),e.jsx(r,{children:e.jsx(d,{variant:"subtle",colorType:"warning",children:"Warning"})})]}),e.jsxs(n,{striped:!0,children:[e.jsx(r,{style:{fontFamily:"monospace",fontSize:"12px"},children:"kube-cache-01"}),e.jsx(r,{children:"512 MB"}),e.jsx(r,{children:"6 days"}),e.jsx(r,{children:e.jsx(d,{variant:"subtle",colorType:"success",children:"Healthy"})})]})]})]}),args:{responsive:!0}};var t,o,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Table {...args}>\r
      <Thead>\r
        <Tr>\r
          <Th>Pod ID</Th>\r
          <Th>Memory Alloc</Th>\r
          <Th>Uptime</Th>\r
          <Th>Status</Th>\r
        </Tr>\r
      </Thead>\r
      <Tbody>\r
        <Tr striped>\r
          <Td style={{
          fontFamily: "monospace",
          fontSize: "12px"
        }}>kube-auth-4f</Td>\r
          <Td>128 MB</Td>\r
          <Td>14 days</Td>\r
          <Td><Badge variant="subtle" colorType="success">Healthy</Badge></Td>\r
        </Tr>\r
        <Tr>\r
          <Td style={{
          fontFamily: "monospace",
          fontSize: "12px"
        }}>kube-db-12</Td>\r
          <Td>1.2 GB</Td>\r
          <Td>89 days</Td>\r
          <Td><Badge variant="subtle" colorType="warning">Warning</Badge></Td>\r
        </Tr>\r
        <Tr striped>\r
          <Td style={{
          fontFamily: "monospace",
          fontSize: "12px"
        }}>kube-cache-01</Td>\r
          <Td>512 MB</Td>\r
          <Td>6 days</Td>\r
          <Td><Badge variant="subtle" colorType="success">Healthy</Badge></Td>\r
        </Tr>\r
      </Tbody>\r
    </Table>,
  args: {
    responsive: true
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,j as default};
