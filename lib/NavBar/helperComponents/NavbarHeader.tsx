import { TopNavBarProps } from "../helpers";
import { NavHeaderComponent } from "../styles";

export default function NavbarTitle({
  navBarHeaderDesc = "john Son",
  navbarHeaderText = "John Doe",
  $navbarHeaderTextColor = "black",
  $navbarHeaderDescColor = "black",
}: TopNavBarProps) {
  return (
    <NavHeaderComponent
      $navbarHeaderDescColor={$navbarHeaderDescColor}
      $navbarHeaderTextColor={$navbarHeaderTextColor}
    >
      <h1 className="header">{navbarHeaderText}</h1>
      <div className="description">{navBarHeaderDesc}</div>
    </NavHeaderComponent>
  );
}
