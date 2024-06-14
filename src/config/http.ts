import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL ?? '/'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true


