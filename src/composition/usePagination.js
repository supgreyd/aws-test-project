export function usePagination(config) {
  const { per_page, total } = config;
  const numberOfPages = Math.ceil(total / per_page);

  return numberOfPages;
}
