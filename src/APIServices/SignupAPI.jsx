import axios from 'axios'

export default function Create(Name,Email,Password){
    let URL = 'https://aide-bussiness-solution-server.vercel.app/api/v1/CreateUser';
    let PostBody = {
        Name:Name,
        Email:Email,
        Password:Password,
    }
    return axios.post(URL,PostBody)
    
    .then((res)=>{
        localStorage.setItem('my-token', res.data.token)
        if(res.status===200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}