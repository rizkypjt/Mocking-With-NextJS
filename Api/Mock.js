
async function login (email, password){
    if (email === "indomie@enak.com" && password === "rahasia") {
        return true
    } else {
        return false
    }
}

export default login;