import { ArrowLeftIcon } from '@/components/icons/arrowLeft';
import { ArrowRightIcon } from '@/components/icons/arrowRight';
import { PageButton } from '@/components/pagination/components/button';
import { ContainerStyled } from '@/components/pagination/components/container';

type PaginationProps = {
  totalItems: number;
  currentPage: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  totalItems,
  currentPage,
  onPageChange,
  perPage,
}: PaginationProps) => {
  const pagesArray = Array.from(
    { length: totalItems <= perPage ? 1 : Math.ceil(totalItems / perPage) },
    (_, index) => index,
  );

  function handlePreviousClick() {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNextClick() {
    if (currentPage < pagesArray.length - 1) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <ContainerStyled>
      {pagesArray.map((indexPage) => (
        <PageButton
          key={indexPage}
          $isCurrentPage={currentPage === indexPage}
          onClick={() => onPageChange(indexPage)}
        >
          {indexPage + 1}
        </PageButton>
      ))}
      <PageButton $isCurrentPage={false} onClick={handlePreviousClick}>
        <ArrowLeftIcon />
      </PageButton>
      <PageButton $isCurrentPage={false} onClick={handleNextClick}>
        <ArrowRightIcon />
      </PageButton>
    </ContainerStyled>
  );
};
