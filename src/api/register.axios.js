import axios from "axios";

const registerUserAxios = async (register) => {
    const {
        firstname,
        lastname,
        email,
        password
    } = register

    return await axios.post('http://localhost:3000/api/register', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    })
}

export default registerUserAxios;