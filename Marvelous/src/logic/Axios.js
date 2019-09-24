import axios from 'axios'
//localhost
//localhost
const pathURL = 'http://192.168.0.0:0000'

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
