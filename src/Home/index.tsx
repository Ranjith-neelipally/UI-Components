import { ThemeColors } from "$/colors";
import { Avatar, Button, ContentWrapper, RootElement, TopNavBar } from "$/main";
import useNavigation from "@/Utils/Constants/NavElements";

function Home() {
  const NavItems = useNavigation();


  return (
    <RootElement>
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
      />
      <ContentWrapper>
        <Avatar label="ranjith" $borderColor={ThemeColors.surfaceHigh} />
        <>hello</>
      </ContentWrapper>
      <Button />
    </RootElement>
  );
}

export default Home;
