export interface Meta {
  currentPage: number
  firstPage: number
  firstPageUrl: string
  lastPage: number
  lastPageUrl: string
  nextPageUrl: string
  perPage: number
  previousPageUrl: string
  total: number
}

export interface Paginate<TEntity> {
  meta: Meta
  data: TEntity[]
}

export interface PaginateQuery {
  page: number
  perPage: number
}
