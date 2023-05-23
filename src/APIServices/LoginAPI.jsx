import axios from 'axios'

export default function Create(Email,Password){
    let URL = 'https://aide-bussiness-solution-server.vercel.app/api/v1/LoginUser';
    let PostBody = {
        Email:Email,
        Password:Password
    }
    console.log(URL,PostBody)
    return axios.post(URL,PostBody,{
        headers:{
            authorization:`bearer ${localStorage.getItem('my-token')}`,
        }
    })
    
    .then((res)=>{
        console.log(res)
       
        localStorage.setItem('my-token', res.data.token)
        if(res.status===200 ){
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