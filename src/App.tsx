import { Button } from "my-material-theme-ui-components";
import { ThemeColors } from "$/colors";
import {  TopNavBar, RootElement, Avatar, ContentWrapper } from "$/main";

function App() {
  return (
    <>
      <RootElement>
        <TopNavBar
          clickableTopnavIcon={() => {
            console.log("hello");
          }}
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
        />
        <ContentWrapper>
          <Avatar label="ranjith" $borderColor={ThemeColors.surfaceHigh} />
          <>hello</>
        </ContentWrapper>
        <Button />
      </RootElement>
    </>
  );
}

export default App;
