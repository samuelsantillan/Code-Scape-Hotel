import axios from 'axios'


const instance = axios.create(
    {

        baseURL: 'https://api.hotelcodescape.tech/api/',
        withCredentials: true
    }
)

export default instance;