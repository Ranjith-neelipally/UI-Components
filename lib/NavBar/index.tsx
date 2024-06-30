import { TopNavigationBar } from "./styles";
import { TopNavBarProps } from "./helpers";
import { TopNavclassname } from "./variables";
import NavbarTitle from "./helperComponents/NavbarHeader";
import NavItems from "./NavLink";

function NavBar({
  navbarHeaderText = "John Doe",
  navBarHeaderDesc = "Developer",
  $navbarHeaderDescColor = "#626117",
  $navbarHeaderTextColor = "#333200 ",
  title = NavbarTitle({
    navBarHeaderDesc,
    navbarHeaderText,
    $navbarHeaderDescColor,
    $navbarHeaderTextColor,
  }),
  ariaLabel = "Main Navigation",
  topNavclassName,
  topNavId = "topNavId",
  topnavIcon = "icon here",
  topNavIconId = "topNavIcon",
  clickableTopnavIcon,
  $backgroundColor = "#ECE8DE",
  customStructure,
  topNavIconClassName,
  navItems = [
    { id: "navItem1", label: "Nav Item 1", $isActive: true },
    { id: "navItem2", label: "Nav Item 2" },
    { id: "navItem3", label: "Nav Item 3" },
    { id: "navItem4", label: "Nav Item 4" },
  ],
  $navItemactiveColor = "#CCCB75",
  $navItemActiveTextColor = "#333200",
  $navItemHoverColor = "#C0BD75",
  $navLoaction = "top",
}: TopNavBarProps) {
  const clickableTopnavIconWrapper = !clickableTopnavIcon ? (
    <div
      className={TopNavclassname({
        topNavIconClassName,
      })}
      id={topNavIconId}
      title={topNavIconId}
    >
      {topnavIcon && <>{topnavIcon}</>}
    </div>
  ) : (
    <a
      className={TopNavclassname({
        topNavIconClassName,
        clickableTopnavIcon,
      })}
      id={topNavIconId}
      onClick={clickableTopnavIcon}
      title={topNavIconId}
    >
      {topnavIcon && <>{topnavIcon}</>}
    </a>
  );

  return (
    <>
      <TopNavigationBar
        $navLoaction={$navLoaction}
        $backgroundColor={$backgroundColor}
        aria-label={ariaLabel}
        className={topNavclassName}
        id={topNavId}
        $isClickable={clickableTopnavIcon && true}
      >
        {customStructure ? (
          <>{customStructure}</>
        ) : (
          <>
            <section className="main-section">
              {clickableTopnavIconWrapper}
              <>{title}</>
            </section>
            <section className="navlinks-section">
              <NavItems
                $navLoaction={$navLoaction}
                navItems={navItems}
                $navItemactiveColor={$navItemactiveColor}
                $navItemActiveTextColor={$navItemActiveTextColor}
                $navItemHoverColor={$navItemHoverColor}
                $backgroundColor={$backgroundColor}
              />
            </section>
          </>
        )}
      </TopNavigationBar>
    </>
  );
}

export default NavBar;
