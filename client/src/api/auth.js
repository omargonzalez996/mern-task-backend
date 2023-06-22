import axios from './axios'
axios.defaults.withCredentials = true;

export const registerRequest = (user) => axios.post(`/register`, user)

export const loginRequest = (user) => axios.post(`/login`, user)

export const verifyTokenRequest = (user) => axios.get('/auth/verify')