import axios from 'axios'
import Cookies from 'js-cookie'
const getToken = Cookies.get('token')
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use(
    (config: any) => {
        if (getToken) {
            config.headers['Authorization'] = `Bearer ${getToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default api
