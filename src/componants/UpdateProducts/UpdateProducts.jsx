import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProducts = () => {
    const data = useLoaderData()
    console.log(data);
    const handleUpdate =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value
        const updateData = {
            name,
            price
        }
        console.log(updateData);

        fetch(`http://localhost:5000/coffess/${data._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('data succefully updated')
            }
            
        })

        
    }
    
    return (
        <div>
            <form onSubmit={handleUpdate}>
            <input type="text" name="name" placeholder='coffee name' id="" />
            <input type="text" name="price" placeholder='coffee price' id="" />
            <input className='bg-green-500' type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateProducts;