export interface BaseError {
  title: string
  type: string
  status: number
  detail: string
}

export interface BusinessError extends BaseError {}

export interface NotFoundError extends BaseError {}

export interface UnauthorizedError extends BaseError {}

export interface ValidationError extends BaseError {
  Errors: ValidationExceptionModel[]
}

export interface ValidationExceptionModel {
  property: string | null
  Errors: string[] | null
}
