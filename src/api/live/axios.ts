import axios from 'axios'
import { CONFIG } from '../../data/config'

export const axiosClient = () => {
  axios.defaults.baseURL = CONFIG.BASE_URL_DEV

  axios.defaults.withCredentials = true
  return axios
}

export const axiosClientAuthed = () => {
  const client = axiosClient()

  client.defaults.headers[
    'Authorization'
  ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjAsInVzZXJuYW1lIjoic2EuYWJkdWxnYWZhckBnbWFpbC5jb20iLCJleHAiOjE2NDAwODUxODIsImVtYWlsIjoic2EuYWJkdWxnYWZhckBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYzOTk5ODc4Mn0.1gAY5vceMv12RfwqlaL_Msyk7wJH0U4BtTGsKh2IfCQ`

  return client
}
