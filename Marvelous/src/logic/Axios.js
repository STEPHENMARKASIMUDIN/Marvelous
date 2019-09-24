import axios from 'axios'
//192.168.19.60
//localhost
const pathURL = 'http://192.168.19.60:1552'

export async function GetAxios(path, port) {
    return axios.get(`${pathURL}/movieList?path=${path}&port=${port}`)
        .then(response => {
            return response.data.result
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
}

export async function PostAxios(data) {
    return axios.post(`${pathURL}/login`, data)
        .then((response) => {
            return response.data
        }).catch(err => {
            console.log(err);
        })
}