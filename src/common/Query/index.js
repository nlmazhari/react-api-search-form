import axios from 'axios'

const serverUrl = 'http://search.spoonflower.com/admin/searchv2'

export default function query(url, body = {}) {
    return axios.post(serverUrl + url, body)
}