import axios from 'axios'

async function login (email, password){
    const form = new FormData()
    form.append("email", email)
    form.append("password", password)

    const res = await axios.post(`https://192.168.1.28/login`, form)
    
    if (res.status === 200) {
        return true
    } else {
        return false
    }
}

export default login;