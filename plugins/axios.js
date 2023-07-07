export default function({ $axios }, inject) {
    const api = $axios.create({
        baseURL: `http://localhost:7004/bk/v1/`
    })
   
    inject('api', api)
}