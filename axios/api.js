import { httpRequestGet } from './AxiosInstance.js'

export const FETCH_ROOM = {
  getRoomList: ({ ...data }) => httpRequestGet('/api/room/room/getRoomList', { params: { ...data } })
}
