import {
  BaseError,
  BusinessError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from '../errors';

class ErrorSeperatorService {
  private declare toast;

  handleErrors(error: BaseError, toast: string) {
    this.toast = toast;

    if (error.status === 400 && error.type == 'Business') {
      this.handleBusinessError(error);
    } else if (error.status === 400 && error.type == 'Validation') {
      const validationError = error as ValidationError;
      this.handleValidationError(validationError);
    } else if (error.status === 401 && error.type == 'Unauthorized') {
      this.handleUnauthorizedError(error);
    } else if (error.status === 404 && error.type == 'NotFound') {
      this.handleNotFoundError(error);
    } else {
      this.handleBaseError(error);
    }
  }

  handleValidationError(error: ValidationError) {
    error.Errors?.forEach((e) => {
      e?.Errors?.forEach((c) => {
        this.toast.error(c + e.property);
      });
    });
  }

  handleUnauthorizedError(error: UnauthorizedError) {
    this.toast.error(error.detail);
  }

  handleBusinessError(error: BusinessError) {
    this.toast.error(error.detail);
  }

  handleNotFoundError(error: NotFoundError) {
    this.toast.error(error.detail);
  }

  handleBaseError(error: BaseError) {
    if (import.meta.env.PROD) {
      this.toast.error(error.title);
    } else {
      this.toast.error(error.detail);
    }
  }
}

export const errorSeperator = new ErrorSeperatorService();
