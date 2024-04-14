export interface Pagination<T> {
    docs: T[];
    page: number;
    pages: number;
    total: number;
    limit: number;
}