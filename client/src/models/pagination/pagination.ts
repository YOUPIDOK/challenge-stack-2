export interface IPagination<T> {
    results: T[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  }