import axios from "axios";

const http = axios.create({
    baseURL: 'https://1005-186-195-147-146.ngrok-free.app/'
  })
//End Points
const JSONRPC = 'jsonrpc'


const registerUser = async payload => {
    try {
       
        await http.post(JSONRPC, {...payload})

        return true
    } catch (error) {
        alert(error.message)
    }
}

export {
    registerUser
}


