import Axios from 'axios'

/* Proxy: http://www.whateverorigin.org/ */

export const Api = Axios.create({
    
    baseURL:'https://fruitapp.vercel.app/api',
    
})