import axios from "axios";

export const request2 = async (url, method = 'GET', body = null, headers = {}, token = null) => {
    try{
        // const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE5NTdjODBkOWQyODRlNTZjZDlmZWIiLCJyb2xlcyI6InN0dWRlbnQiLCJpYXQiOjE2MTM2ODEzMzksImV4cCI6MTYxMzY4MTM5OX0.4wCNbKzmATDW3ZOh4glwcd2FltugrmD3PRy1dndaQJM"
        const option = {
            url,
            method,
            headers,
        }

        if (token){
            headers['Authorization'] = token
        }
        if (body){
            option.data = body
        }

        const response = await axios(option)
        console.log('response',response)

        return response.data
    }   catch (e) {
        console.log('error',e.response.data.message)
        throw e
    }
}