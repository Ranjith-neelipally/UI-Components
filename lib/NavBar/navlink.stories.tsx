import { Meta, StoryObj } from "@storybook/react";

import { TopNavBar } from "../main";
import { NavItemProps } from "./helpers";
import { useState } from "react";

const meta: Meta = {
  title: "TopNavBar",
  component: TopNavBar,
};

export default meta;

type Story = StoryObj<typeof TopNavBar>;

const NavItems: NavItemProps[] = [
  {
    id: "navItem1",
    label: "Nav Item 1",
    onClick: () => console.log("Nav Item 1 clicked"),
    className: "nav-item",
    ariaLabel: "Navigation Item 1",
    isDisabled: false,
    isClickable: true,
    $isActive: true,
    $navItemactiveColor: "#ff0000",
    $navItemActiveTextColor: "#ffffff",
    $navItemHoverColor: "#00ff00",
  },
  {
    id: "navItem2",
    label: "Nav Item 2",
    onClick: () => console.log("Nav Item 2 clicked"),
    className: "nav-item",
    ariaLabel: "Navigation Item 2",
    isDisabled: false,
    isClickable: true,
    $isActive: false,
    $navItemactiveColor: "#ff0000",
    $navItemActiveTextColor: "#ffffff",
    $navItemHoverColor: "#00ff00",
  },
  {
    id: "navItem3",
    label: "Nav Item 3",
    onClick: () => console.log("Nav Item 3 clicked"),
    className: "nav-item",
    ariaLabel: "Navigation Item 3",
    isDisabled: false,
    isClickable: true,
    $isActive: false,
    $navItemactiveColor: "#ff0000",
    $navItemActiveTextColor: "#ffffff",
    $navItemHoverColor: "#00ff00",
  },
  {
    id: "navItem4",
    label: "Nav Item 4",
    onClick: () => console.log("Nav Item 4 clicked"),
    className: "nav-item",
    ariaLabel: "Navigation Item 4",
    isDisabled: false,
    isClickable: true,
    $isActive: false,
    $navItemactiveColor: "#ff0000",
    $navItemActiveTextColor: "#ffffff",
    $navItemHoverColor: "#00ff00",
  },
];

export const Default: Story = {
  args: {
    navItems: NavItems,
  },
};

export const WorkinModal = () => {
  const [activeItem, setActiveItem] = useState("navItem1");

  const NavItems: NavItemProps[] = [
    {
      id: "navItem1",
      label: "Nav Item 1",
      onClick: () => setActiveItem("navItem1"),
      className: "nav-item",
      ariaLabel: "Navigation Item 1",
      isDisabled: true,
      isClickable: true,
      $isActive: activeItem === "navItem1",
      $navItemactiveColor: "#ff0000",
      $navItemActiveTextColor: "#ffffff",
      $navItemHoverColor: "#00ff00",
    },
    {
      id: "navItem2",
      label: "Nav Item 2",
      onClick: () => setActiveItem("navItem2"),
      className: "nav-item",
      ariaLabel: "Navigation Item 2",
      isDisabled: false,
      isClickable: true,
      $isActive: activeItem === "navItem2",
      $navItemactiveColor: "#ff0000",
      $navItemActiveTextColor: "#ffffff",
      $navItemHoverColor: "#00ff00",
    },
    {
      id: "navItem3",
      label: "Nav Item 3",
      onClick: () => setActiveItem("navItem3"),
      className: "nav-item",
      ariaLabel: "Navigation Item 3",
      isDisabled: false,
      isClickable: true,
      $isActive: activeItem === "navItem3",
      $navItemactiveColor: "#ff0000",
      $navItemActiveTextColor: "#ffffff",
      $navItemHoverColor: "#00ff00",
    },
    {
      id: "navItem4",
      label: "Nav Item 4",
      onClick: () => setActiveItem("navItem4"),
      className: "nav-item",
      ariaLabel: "Navigation Item 4",
      isDisabled: false,
      isClickable: true,
      $isActive: activeItem === "navItem4",
      $navItemactiveColor: "#ff0000",
      $navItemActiveTextColor: "#ffffff",
      $navItemHoverColor: "#00ff00",
    },
  ];

  return <TopNavBar navItems={NavItems} />;
};
