import request from '../utils/request'

export const requestToken = async () => {
  return request('/token', {
    method: 'POST',
    data: {
      username: 'dan',
      password: '1234',
    },
  })
}

export const requestList = async () => {
  return request('/topic', {})
}
