import { Button } from "my-material-theme-ui-components";
import { ThemeColors } from "$/colors";
import { TopNavBar, RootElement, Avatar, ContentWrapper } from "$/main";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { NavStore } from "./Store/NavStore";

function App() {
  const Home = lazy(() => import("@/Home"));
  const SideNAv = lazy(() => import("@/SideNav"));

  const About = () => <>About</>;
  return (
    <>
      <NavStore>
        <Router>
          <Suspense fallback="loading..">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sidenav" element={<SideNAv />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Suspense>
        </Router>
      </NavStore>
    </>
  );
}

export default App;
