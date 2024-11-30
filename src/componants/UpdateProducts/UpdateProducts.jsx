import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProducts = () => {
    const data = useLoaderData()
    console.log(data);
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value
        const updateData = {
            name,
            price
        }
        console.log(updateData);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#0096FF",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it"
          }).then((result) => {
            if (result.isConfirmed) {
              
                fetch(`http://localhost:5000/coffess/${data._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            // alert('data succefully updated')
                            Swal.fire({
                                title: "Updated",
                                text: "Your file has been Updated",
                                icon: "success"
                              });
                        }
        
                    })
            }
          });



    }

    return (
        <div>
           

            <div className='bg-[#F4F3F0] my-6 w-[80%] m-auto py-6 px-4'>
                <div className='text-center py-6'>
                    <p className='text-4xl text-[#331A15] font-semibold '>Update Coffee Details</p>
                    
                </div>
                <div>
                    <form onSubmit={handleUpdate} className='grid grid-cols-2 gap-4 w-[80%] my-6 m-auto text-2xl'>

                        <label>
                            Name :
                            <input type="text" placeholder="Enter Coffee Name" name='name' defaultValue={data.name} className="input input-bordered w-full text-lg h-8 rounded-sm" />
                        </label>
                        <label>
                            Price :
                            <input type="text" placeholder="Enter Coffee Price" name='price' defaultValue={data.price} className="input input-bordered w-full text-lg h-8 rounded-sm" />
                        </label>
                        <label>
                            Chef :
                            <input type="text" placeholder="Enter Coffee Chef" name='chef' defaultValue={data.chef} className="input input-bordered w-full text-lg h-8 rounded-sm" />
                        </label>
                        <label>
                            Supplier :
                            <input type="text" placeholder="Enter Coffee Supplier" name='supplier' defaultValue={data.supplier} className="input input-bordered w-full text-lg h-8 rounded-sm" />
                        </label>
                        <label>
                            Test :
                            <input type="text" placeholder="Enter Coffee Test" name='test' defaultValue={data.test} className="input input-bordered w-full text-lg h-8 rounded-sm" />
                        </label>
                        <label>
                            Category :
                            <input type="text" placeholder="Enter Coffee Category" name='category' defaultValue={data.category} className="input input-bordered w-full text-lg h-8 rounded-sm" />
                        </label>
                        <label>
                            Details :
                            <input type="text" placeholder="Enter Coffee Details " name='details' defaultValue={data.details} className="input input-bordered w-full text-lg h-8 rounded-sm" />
                        </label>
                        <label>
                            Photo :
                            <input type="text" placeholder="enter photo URL" name='photo' defaultValue={data.photo} className="input input-bordered w-full text-lg h-8 rounded-sm" />
                        </label>

                        <button className='w-full bg-yellow-600 h-8 mt-[8%]'>Add Coffee</button>



                    </form>
                </div>


            </div>

        </div>
    );
};

export default UpdateProducts;