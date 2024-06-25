import { useEffect, useRef, useState } from "react";
import { TopNavBarProps } from "../helpers";
import { MobileNavBar, NavItem, NavList } from "../styles";

export default function NavItems({
  navItems,
  $navItemactiveColor,
  $navItemActiveTextColor,
  $navItemHoverColor,
  $backgroundColor,
}: TopNavBarProps) {
  const [isnavBarOpen, setisnavBarOpen] = useState(false);
  const NavBarRef = useRef<HTMLUListElement>(null);

  const toggleNavBar = () => {
    setisnavBarOpen(true);
  };

  const ClosenavBar = () => {
    setisnavBarOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (NavBarRef.current && !NavBarRef.current.contains(e.target as Node)) {
      setisnavBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <button
        tabIndex={0}
        title="toggle nav bar"
        aria-label="toggle side navigatio bar"
        className="hamburger"
        onClick={toggleNavBar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g>
            <path
              d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
              stroke="#333200"
              strokeWidth="2.5"
            />
          </g>
          <defs>
            <>
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.000915527)"
              />
            </>
          </defs>
        </svg>
      </button>

      <NavList role="list">
        {navItems &&
          navItems.map((item, index) => (
            <li key={`${index}${item.id}`}>
              <NavItem
                key={`${index}${item.id}`}
                id={item.id}
                aria-label={item.ariaLabel}
                className={item.className}
                disabled={item.isDisabled}
                $isActive={item.$isActive}
                $navItemactiveColor={$navItemactiveColor}
                $navItemActiveTextColor={$navItemActiveTextColor}
                $navItemHoverColor={$navItemHoverColor}
                onClick={item.onClick}
              >
                {item.label}
              </NavItem>
            </li>
          ))}
      </NavList>
      {isnavBarOpen && (
        <>
          <MobileNavBar
            id="navbar"
            $backgroundColor={$backgroundColor}
            ref={NavBarRef}
          >
            <div onClick={ClosenavBar} className="close-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                strokeWidth="2.5"
              >
                <path
                  fill="#333200"
                  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                />
              </svg>
            </div>
            <div className="wrapper">
              {navItems &&
                navItems.map((item, index) => (
                  <li key={`${index}${item.id}`}>
                    <NavItem
                      tabIndex={0}
                      key={`${index}${item.id}`}
                      id={item.id}
                      aria-label={item.ariaLabel}
                      className={item.className}
                      disabled={item.isDisabled}
                      $isActive={item.$isActive}
                      $navItemactiveColor={$navItemactiveColor}
                      $navItemActiveTextColor={$navItemActiveTextColor}
                      $navItemHoverColor={$navItemHoverColor}
                      onClick={item.onClick}
                      onKeyDown={item.onClick}
                    >
                      {item.label}
                    </NavItem>
                  </li>
                ))}
            </div>
          </MobileNavBar>
        </>
      )}
    </>
  );
}
