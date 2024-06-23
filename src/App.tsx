// import { Button } from "my-material-theme-ui-components";
import { Button, TopNavBar, RootElement } from "$/main";

function App() {
  return (
    <>
      <RootElement>
        <TopNavBar
          clickableTopnavIcon={() => {
            console.log("hello");
          }}
          topnavIcon="icon here and hey"
          topNavIconClassName="and hello "
        />
      </RootElement>

      <Button />
    </>
  );
}

export default App;
