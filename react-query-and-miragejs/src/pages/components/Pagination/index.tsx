import * as S from "./styles";

interface PaginationProps {
  totalCountOfRegisters: number;
  currentPage: number;
  registerPerPage?: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  registerPerPage = 10,
  onPageChange,
  totalCountOfRegisters,
}: PaginationProps) => {
  const siblingsCount = 1;

  function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter((page) => page > 0);
  }

  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <div style={{ marginTop: "1rem" }}>
      {currentPage > 1 + siblingsCount && <S.Button>1</S.Button>}

      {previousPage.length > 0 &&
        previousPage.map((page) => (
          <S.Button onClick={() => onPageChange(page)}>{page}</S.Button>
        ))}

      <S.Button isCurrent>{currentPage}</S.Button>

      {nextPage.length > 0 &&
        nextPage.map((page) => (
          <S.Button onClick={() => onPageChange(page)}>{page}</S.Button>
        ))}

      {currentPage + siblingsCount < lastPage && (
        <S.Button onClick={() => onPageChange(lastPage)}>{lastPage}</S.Button>
      )}
    </div>
  );
};
