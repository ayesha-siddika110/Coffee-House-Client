import React from 'react';

const AddProduct = () => {

    const handleAddProducts =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const values = {name,price,photo}
        console.log(values);

        fetch('http://localhost:5000/coffess',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('successfully coffee added')
            }
            form.reset()
            
        })
        
    }
    return (
        <div className='flex justify-center items-center'>
            <p>add coffee</p> <br />
            <div>
                <form onSubmit={handleAddProducts}>
                    <input type="text" name="name" placeholder='enter the coffee name' className='border px-2 py-1' id="" /><br />
                    <input type="text" name="price" placeholder='enter the price' className='border px-2 py-1' id="" /><br />
                    <input type="text" name="photo" placeholder='photo url' className='border px-2 py-1' id="" /><br />
                    <input type="submit" value="add to coffee" className='bg-yellow-500' />
                    
                </form>

            </div>
            
           

        </div>
    );
};

export default AddProduct;