import { useEffect, useState } from 'react'
import GetProduct from '../../../APIServices/GetProductAPI';


function UploadProduct() {
    
    const [productData,setProductData]=useState([])

    useEffect(()=>{
        GetProduct().then((result) => {
            setProductData(result);
          })
    },[])

   console.log(productData)

   const AddMyCardProduct = (id)=>{
        console.log(id)
   }

    return (
        <div className='px-16 mx-auto mb-20'>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                 { 
                    productData?.map((data,id)=>{
                        return (
                            <div key={id} className="card card-compact p-5 w-96 bg-base-100 shadow-lg cursor-pointer">
                                <figure>
                                    <img src={data?.img} className='w-64 h-64' alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <div className='flex justify-between mb-4'>
                                        <h2 className='text-2xl font-bold text-violet-500'>{data.Name}</h2>
                                        <h2 className='text-2xl font-bold text-red-700'>{data.Price}</h2>
                                    </div>
                                    <div className="card-actions justify-center ">
                                        <button onClick={()=>AddMyCardProduct(data?._id)} className="btn bg-sky-300 border-sky-300 w-80"  >
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

export default UploadProduct;