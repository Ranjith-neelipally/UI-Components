import { useState } from "react";
import { Meta } from "@storybook/react";
import { Pagination } from "../main";

const meta: Meta = {
  title: "Navigation/Pagination",
  component: Pagination,
};

export default meta;

export const DefaultPagination = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      currentPage={page}
      totalPages={10}
      onPageChange={setPage}
    />
  );
};

export const DisabledPagination = () => (
  <Pagination
    currentPage={3}
    totalPages={10}
    onPageChange={() => {}}
    disabled
  />
);
