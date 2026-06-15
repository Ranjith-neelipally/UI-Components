import { PaginationContainer, PageButton, EllipsisSpan } from "./styles";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  disabled?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  disabled = false,
}: PaginationProps) => {
  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const getPageNumbers = () => {
    // Total numbers to show in navigation bar:
    // siblingCount + firstPage + lastPage + currentPage + 2*ellipsis
    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;



    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, "dots", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [1, "dots", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, "dots", ...middleRange, "dots", totalPages];
    }

    return range(1, totalPages);
  };

  const pages = getPageNumbers();

  const handlePrev = () => {
    if (currentPage > 1 && !disabled) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !disabled) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer aria-label="pagination navigation">
      <PageButton onClick={handlePrev} disabled={currentPage === 1 || disabled} $isNavigation>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </PageButton>

      {pages.map((page, index) => {
        if (page === "dots") {
          return <EllipsisSpan key={`dots-${index}`}>&hellip;</EllipsisSpan>;
        }

        return (
          <PageButton
            key={page}
            $isActive={page === currentPage}
            onClick={() => onPageChange(page as number)}
            disabled={disabled}
          >
            {page}
          </PageButton>
        );
      })}

      <PageButton onClick={handleNext} disabled={currentPage === totalPages || disabled} $isNavigation>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
