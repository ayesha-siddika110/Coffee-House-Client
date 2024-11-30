import React from 'react';

const AddProduct = () => {

    const handleAddProducts = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const chef = form.chef.value;
        const supplier = form.photo.value;
        const test = form.test.value;
        const details = form.details.value;
        const category = form.category.value;


        const values = { name, price, photo,chef,supplier,test,details,category }
        console.log(values);

        fetch('http://localhost:5000/coffess', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('successfully coffee added')
                }
                form.reset()

            })

    }
    return (
        <div className=' '>

            <div className='bg-[#F4F3F0] my-6 w-[80%] m-auto py-6 px-4'>
                <div className='text-center'>
                    <p className='text-2xl text-[#331A15] font-semibold '>Add New Coffee</p>
                    <p className='text-xs font-extralight'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div>
                    <form onSubmit={handleAddProducts} className='grid grid-cols-2 gap-4 w-[80%] my-6 m-auto'>
                        
                        <label>
                            Name :
                        <input type="text" placeholder="Enter Coffee Name" name='name' className="input input-bordered w-full text-[12px] h-8 rounded-sm" />
                        </label>
                        <label>
                            Price :
                        <input type="text" placeholder="Enter Coffee Price" name='price' className="input input-bordered w-full text-[12px] h-8 rounded-sm" />
                        </label>
                        <label>
                            Chef :
                        <input type="text" placeholder="Enter Coffee Chef" name='chef' className="input input-bordered w-full text-[12px] h-8 rounded-sm" />
                        </label>
                        <label>
                            Supplier :
                        <input type="text" placeholder="Enter Coffee Supplier" name='supplier' className="input input-bordered w-full text-[12px] h-8 rounded-sm" />
                        </label>
                        <label>
                            Test :
                        <input type="text" placeholder="Enter Coffee Test" name='test' className="input input-bordered w-full text-[12px] h-8 rounded-sm" />
                        </label>
                        <label>
                            Category :
                        <input type="text" placeholder="Enter Coffee Category" name='category' className="input input-bordered w-full text-[12px] h-8 rounded-sm" />
                        </label>
                        <label>
                            Details :
                        <input type="text" placeholder="Enter Coffee Details " name='details' className="input input-bordered w-full text-[12px] h-8 rounded-sm" />
                        </label>
                        <label>
                            Photo :
                        <input type="text" placeholder="enter photo URL" name='photo' className="input input-bordered w-full text-[12px] h-8 rounded-sm" />
                        </label>

                        <button className='w-full bg-yellow-600 h-8 mt-[8%]'>Add Coffee</button>
                        
                       
                        
                    </form>
                </div>


            </div>
            {/* <p>add coffee</p> <br />
            <div>
                <form onSubmit={handleAddProducts}>
                    <input type="text" name="name" placeholder='enter the coffee name' className='border px-2 py-1' id="" /><br />
                    <input type="text" name="price" placeholder='enter the price' className='border px-2 py-1' id="" /><br />
                    <input type="text" name="photo" placeholder='photo url' className='border px-2 py-1' id="" /><br />
                    <input type="submit" value="add to coffee" className='bg-yellow-500' />

                </form>

            </div> */}



        </div>
    );
};

export default AddProduct;