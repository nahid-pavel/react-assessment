import axios from 'axios';

export const SignInAPi = (payload) => {

    return axios.post('/api/users/login', payload)

}

export const SignUpAPi = (payload) => {

    return axios.post('/api/users', payload)

}