import { Meta, StoryObj } from "@storybook/react";
import { Table, Thead, Tbody, Tr, Th, Td, Badge } from "../main";

const meta: Meta = {
  title: "Data Display/Table",
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Pod ID</Th>
          <Th>Memory Alloc</Th>
          <Th>Uptime</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr striped>
          <Td style={{ fontFamily: "monospace", fontSize: "12px" }}>kube-auth-4f</Td>
          <Td>128 MB</Td>
          <Td>14 days</Td>
          <Td><Badge variant="subtle" colorType="success">Healthy</Badge></Td>
        </Tr>
        <Tr>
          <Td style={{ fontFamily: "monospace", fontSize: "12px" }}>kube-db-12</Td>
          <Td>1.2 GB</Td>
          <Td>89 days</Td>
          <Td><Badge variant="subtle" colorType="warning">Warning</Badge></Td>
        </Tr>
        <Tr striped>
          <Td style={{ fontFamily: "monospace", fontSize: "12px" }}>kube-cache-01</Td>
          <Td>512 MB</Td>
          <Td>6 days</Td>
          <Td><Badge variant="subtle" colorType="success">Healthy</Badge></Td>
        </Tr>
      </Tbody>
    </Table>
  ),
  args: {
    responsive: true,
  },
};
