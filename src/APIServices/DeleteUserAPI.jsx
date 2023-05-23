import axios from 'axios'

export default function DeleteUser(id){
    let URL = `https://aide-bussiness-solution-server.vercel.app/api/v1/DeleteUser/${id}`;
    
    return axios.deel(URL,{
        headers:{
            authorization:`bearer ${localStorage.getItem('my-token')}`,
        }
    })
    
    
    .then((res)=>{
        console.log(res)
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