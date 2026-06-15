import React from "react";
import { StyledList, StyledListItem, CustomListItemContainer, ItemIconWrapper } from "./styles";

export interface ListProps {
  children: React.ReactNode;
  ordered?: boolean;
}

export const List = ({ children, ordered = false }: ListProps) => {
  return (
    <StyledList as={ordered ? "ol" : "ul"} $ordered={ordered}>
      {children}
    </StyledList>
  );
};

export interface ListItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const ListItem = ({ children, icon }: ListItemProps) => {
  if (icon) {
    return (
      <li style={{ listStyleType: "none" }}>
        <CustomListItemContainer>
          <ItemIconWrapper>{icon}</ItemIconWrapper>
          <div>{children}</div>
        </CustomListItemContainer>
      </li>
    );
  }

  return <StyledListItem>{children}</StyledListItem>;
};

export default List;
