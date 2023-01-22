import axios from "axios"
const baseURL = "https://dummyjson.com"

export function logIn(data) {
    //returning a promise
    return axios.post(`${baseURL}/auth/login`, data)
}
//promise 99%
//https://dummyjson.com/auth/login
