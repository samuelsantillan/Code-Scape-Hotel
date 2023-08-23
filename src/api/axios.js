import axios from 'axios'


const instance = axios.create(
    {
        baseURL: 'http://hotelcodescape.tech:3000/api/',
        withCredentials: true
    }
)

export default instance;