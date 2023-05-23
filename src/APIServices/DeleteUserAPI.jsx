import axios from 'axios'

export default function DeleteUser(id){
    let URL = `http://localhost:5000/api/v1/DeleteUser/${id}`;
    
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