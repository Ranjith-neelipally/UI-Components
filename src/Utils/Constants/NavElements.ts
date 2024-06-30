import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavContext } from "@/Store/NavStore";

interface NavItem {
  id: string;
  label: string;
  path: string;
  className: string;
  ariaLabel: string;
  isDisabled: boolean;
}

const useNavigation = (): NavItem[] => {
  const navContext = useContext(NavContext);

  if (!navContext) {
    throw new Error("useNavigation must be used within a NavContextProvider");
  }
  const { state, dispatch } = navContext;
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    dispatch({ type: "NAV", payload: path });
    console.log(state, "state");
  };

  const navItems: NavItem[] = [
    {
      id: "home",
      label: "Home",
      path: "/",
      className: "nav-item",
      ariaLabel: "Navigation Item 1",
      isDisabled: false,
    },
    {
      id: "navItem2",
      label: "TopNav",
      path: "/topnav",
      className: "nav-item",
      ariaLabel: "Navigation Item 2",
      isDisabled: false,
    },
    {
      id: "navItem3",
      label: "Side Nav",
      path: "/sidenav",
      className: "nav-item",
      ariaLabel: "Navigation Item 3",
      isDisabled: false,
    },
  ];

  return navItems.map((item) => ({
    ...item,
    $isActive: state === item.path,
    onClick: () => handleClick(item.path),
  }));
};

export default useNavigation;
