import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {

    const loadedData = useLoaderData()
    // console.log(data);

    const [data,setdata] = useState(loadedData)

    const handleDelete =(_id)=>{
        console.log(_id);

        fetch(`http://localhost:5000/coffess/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                const remaining = loadedData.filter(item=> item._id !== _id)
                alert('deleted')
                setdata(remaining)

            }
            
        })
        

    }
    const handleUpdate =()=>{

    }    
    return (
        <div className='text-center py-3 space-y-3'>

            our products {data.length}
            {
                data && data.map(item=> <p>{item.name}<button onClick={()=>handleDelete(item._id)}>❌</button><Link className='bg-green-500' to={`/updateCoffee/${item._id}`}> Update</Link></p>)
            }
        </div>
    );
};

export default Products;