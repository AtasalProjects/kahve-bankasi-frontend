export interface AbstractBaseModel {
  createdDate: Date
  updatedDate?: Date
  deletedDate?: Date
}

export interface BaseModel<TId> extends AbstractBaseModel {
  id: TId
}
