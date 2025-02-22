import axios from 'axios'
import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

class HttpService {
  protected basePath: string

  constructor(basePath: string) {
    this.basePath = basePath
  }

  public async show<TResponseData = object>(
    id: string | number | undefined,
    headers?: AxiosRequestHeaders | undefined
  ): Promise<TResponseData> {
    const path = `${this.basePath}/get/${id}`

    return await axios
      .get(path, { headers: headers })
      .then((res) => res.data)
      .catch((err) => err)
  }

  public async getList<TResponseData = object>(
    headers?: AxiosRequestHeaders | undefined,
    params?: string
  ): Promise<TResponseData> {
    const path = `${this.basePath}/getlist${params || ''}`

    return axios
      .get(path, { headers: headers })
      .then((res) => res.data)
      .catch((err) => err)
  }

  public async destroy<TResponseData = object>(
    id: number,
    headers?: AxiosRequestHeaders | undefined
  ): Promise<TResponseData> {
    const path = `${this.basePath}/delete/${id}`

    return await axios
      .delete(path, { headers: headers })
      .then((res) => res.data)
      .catch((err) => err)
  }

  public async create<TResponseData = object>(
    data: object,
    headers?: AxiosRequestHeaders | undefined
  ): Promise<TResponseData> {
    const path = `${this.basePath}/create`

    const res = await axios.post<TResponseData>(path, data, {
      headers: headers,
    })
    return res.data
  }

  public async update<TResponseData = object>(
    data: object,
    headers?: AxiosRequestHeaders | undefined
  ): Promise<TResponseData> {
    const path = `${this.basePath}/update`

    return await axios
      .put(path, data, { headers: headers })
      .then((res) => res.data)
      .catch((err) => err)
  }

  /*
  |---------------------------
  | BASE HTTP METHODS
  |---------------------------
  */
  protected async get<TResponseData = object>(
    path: string,
    headers?: AxiosRequestHeaders | undefined
  ): Promise<TResponseData> {
    return await axios
      .get(path, { headers: headers })
      .then((res) => res.data)
      .catch((err) => err)
  }

  protected async post<TResponseData = object>(
    path: string,
    data: object,
    config?: AxiosRequestConfig<object> | undefined
  ): Promise<TResponseData> {
    const res = await axios.post<TResponseData>(path, data, config)
    return res.data
  }

  protected async delete<TResponseData = object>(
    path: string,
    data?: object
  ): Promise<TResponseData> {
    return await axios
      .delete(path, { data })
      .then((res) => res.data)
      .catch((err) => err)
  }

  protected async put<TResponseData = object>(
    path: string,
    data: object
  ): Promise<TResponseData> {
    return await axios
      .put(path, data)
      .then((res) => res.data)
      .catch((err) => err)
  }
}

export default HttpService
