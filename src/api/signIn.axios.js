import axios from "axios";

export const getConnected = async (signIn) => {
    const {
        email, password
    } = signIn

    return await axios.post('http://localhost:3000/api/login', {
        email: email, password: password
    })
}