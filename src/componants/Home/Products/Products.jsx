import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsEyeFill } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import { RiChatDeleteLine } from 'react-icons/ri';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Products = () => {

    const loadedData = useLoaderData()
    
    const [data, setdata] = useState(loadedData)
    console.log(data);



    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              })
              .then(result=>{
                if(result.isConfirmed){



                    fetch(`https://coffee-house-server-three.vercel.app/coffess/${_id}`, {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                        
                    .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                  });
                                  
                                }
                                const remaining = loadedData.filter(item => item._id !== _id)
                                // alert('deleted')
                                setdata(remaining)
            
                        })
                }
              })


    }
    const handleUpdate = () => {

    }
    return (
        <div className='text-center text-[#331A15] py-10'>
            <div className='mb-4'>

                <p className=''>--Slip & Savor--</p>

                <h1 className='text-5xl font-bold '>Our Popular Products</h1>
            </div>
            

            <div className=' grid grid-cols-1 md:grid-cols-2 w-[80%] m-auto gap-5 py-4'>
                {data && data.map(item => <>
                    <div className='flex  bg-[#F4F3F0] rounded-lg shadow-lg'>
                        <div className='flex items-center'><img className='w-[300px]' src={item.photo} alt="" /></div>
                        <div className='flex justify-between w-full'>
                            <div className='text-start flex flex-col justify-center'>

                                <div className="text-2xl">Name: <span className='font-normal text-gray-700 '>{item.name}</span></div>
                                <div className=" text-2xl">Chef: <span className='font-normal text-gray-700 '>{item.chef}</span></div>
                                <div className=" text-2xl">Price: <span className='font-normal text-gray-700 '>{item.price} taka</span></div>
                            </div>
                            <div className='flex flex-col justify-center pr-5 space-y-3'>
                            <FaRegEye  className='text-white bg-[#dabf68] w-10 h-10 p-2 rounded-full'/>
                            <Link className='' to={`/updateCoffee/${item._id}`}>
                            <MdEdit className='text-white bg-[#000000] w-10 h-10 p-2 rounded-full' />
                            </Link>
                            <AiTwotoneDelete onClick={() => handleDelete(item._id)} className='text-white bg-[#d83636] w-10 h-10 p-2 rounded-full' />

                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    );
};

export default Products;