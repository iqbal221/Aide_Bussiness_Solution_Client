import { useEffect, useState } from 'react'
import AddMyCardProduct from '../../../APIServices/AddMyCardAPI'


function Gallery() {
    
    const [imageData,setImageData]=useState([])

    useEffect(()=>{
        fetch("image.json")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setImageData(data)
        })
    },[])
   
    const MyCardProduct = (product) =>{
        const {name,price,img} = product
        AddMyCardProduct(name,price,img).then((result)=>{
            if(result === true){
                console.log("ok")
            }
        })
        // console.log(product)
    }

    return (
        <div className='px-16 mx-auto mb-14'>
            <div className='text-center'>
                <h2 className='text-red-400 text-5xl mt-32 mb-28 tracking-wider'>Product Gallery</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                 { 
                    imageData?.map((product,_id)=>{
                        return (
                            <div key={_id} className="card card-compact p-5 w-96 bg-base-100 shadow-lg cursor-pointer">
                                <figure>
                                    <img src={product.img} className='w-64 h-64' alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <div className='flex justify-between mb-4'>
                                        <h2 className='text-2xl font-bold text-violet-500'>{product.name}</h2>
                                        <h2 className='text-2xl font-bold text-red-700'>{product.price}</h2>
                                    </div>
                                    <div className="card-actions justify-center ">
                                        <button onClick={()=>MyCardProduct(product)} className="btn bg-sky-300 border-sky-300 w-80"  >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                            
                     }) 
                 } 
            </div>
        </div>
        
    );
}

export default Gallery;