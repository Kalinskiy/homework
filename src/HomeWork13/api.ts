import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test/',

})

export const homeWorkAPI = {
    hw13(checked: boolean) {
        return instance.post(``, {success:checked})
    }
}