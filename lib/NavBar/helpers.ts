export interface NavItemProps {
  id?: string;
  label?: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  isDisabled?: boolean;
  isClickable?: boolean;
  $isActive?: boolean;
  $navItemactiveColor?: string;
  $navItemActiveTextColor?: string;
  $navItemHoverColor?: string;
}

export interface TopNavBarProps {
  $backgroundColor?: string;
  title?: string | React.ReactNode;
  ariaLabel?: string;
  topNavclassName?: string;
  topNavId?: string;
  topnavIcon?: React.ReactNode | string;
  topNavIconClassName?: string;
  topNavIconId?: string;
  clickableTopnavIcon?: () => void;
  customStructure?: React.ReactNode;
  $isClickable?: boolean;
  navbarHeaderText?: string | React.ReactNode;
  navBarHeaderDesc?: string | React.ReactNode;
  $navbarHeaderTextColor?: string;
  $navbarHeaderDescColor?: string;
  navItems?: NavItemProps[];
  $navItemactiveColor?: string;
  $navItemActiveTextColor?: string;
  $navItemHoverColor?: string;
  $navLoaction?: string;
}
