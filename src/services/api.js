import axios from 'axios'

export const api = axios.create({
    BaseURL: 'http://localhost:3333'
})

export default api