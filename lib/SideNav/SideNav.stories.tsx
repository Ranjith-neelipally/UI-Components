import { useState } from "react";
import { Meta } from "@storybook/react";
import { SideNav } from "../main";
import { NavItem } from "../types/NavTypes";

const meta: Meta = {
  title: "Navigation/SideNav",
  component: SideNav,
};

export default meta;

const items: NavItem[] = [
  {
    id: "components",
    label: "Components",
    children: [
      {
        id: "layout",
        label: "Layout",
        children: [
          { id: "grid", label: "Grid", route: "/grid" },
          { id: "col", label: "Col", route: "/col" },
        ],
      },
      {
        id: "typography",
        label: "Typography",
        children: [{ id: "heading", label: "Heading", route: "/heading" }],
      },
    ],
  },
  {
    id: "docs",
    label: "Documentation",
    children: [
      { id: "installation", label: "Installation", route: "/install" },
    ],
  },
];

export const Interactive = () => {
  const [active, setActive] = useState("grid");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", height: "400px", border: "1px solid rgba(249, 250, 251, 0.08)", borderRadius: "8px", overflow: "hidden" }}>
      <SideNav
        items={items}
        activeRoute={active}
        onItemClick={(item: NavItem) => item.route && setActive(item.route)}
        collapsed={collapsed}
      />
      <div style={{ flex: 1, padding: "24px" }}>
        <button onClick={() => setCollapsed(!collapsed)} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Toggle Collapse
        </button>
        <div style={{ marginTop: "16px" }}>Active Path: {active}</div>
      </div>
    </div>
  );
};
