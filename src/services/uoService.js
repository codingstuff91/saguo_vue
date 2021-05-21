import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getFamilles() {
    return apiClient.get('/familles')
  },
  getListeUos(famille) {
    return apiClient.get('/uos', {
      params : {
        famille
      }
    })
  }
}
