import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCommandes() {
    return apiClient.get('/commandes')
  },
  getProgrammes(attache){
    return apiClient.get('/programmes', {
      params : {
        attache
      }
    })
  },
  getPrestataires(programme){
    return apiClient.get('/prestataires', {
      params : {
        programme
      }
    })
  },
  getTaskcodes(data){
    return apiClient.get('/taskcodes', {
      params : {
        programme : data.programme,
        prestataire : data.prestataire
      }
    })
  }
}
