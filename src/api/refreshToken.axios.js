import axios from "axios";

const refreshTokenAxios = async (accessToken) => {
    return await axios.get('http://localhost:3000/api/refreshToken', {
        headers: {
            'authorization': `bearer ${accessToken}`
        }
    })
}

export default refreshTokenAxios;