import { Avatar, RootElement, TopNavBar } from "$/main";
import useNavigation from "@/Utils/Constants/NavElements";
import { useEffect, useState } from "react";

function SideNavBar() {
  const NavItems = useNavigation();
  const [isMobile, setisMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  return (
    <RootElement $flexDirection={!isMobile ? "row" : "column"} $padding="12px">
      <TopNavBar
        topnavIcon={
          <>
            <Avatar
              label="Ranjith"
              $imageUrl="https://3.img-dpreview.com/files/p/TS600x450~sample_galleries/3002635523/4971879462.jpg"
            />
          </>
        }
        navbarHeaderText="Ranjith Neelipally"
        navBarHeaderDesc="Full Stack Developer"
        navItems={NavItems}
        $navLoaction={!isMobile ? "side" : ""}
      />
      <div style={{ flex: 1 }}>
        <h1>Side Nav</h1>
      </div>
    </RootElement>
  );
}

export default SideNavBar;
