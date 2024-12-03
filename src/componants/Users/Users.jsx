import React, { useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const UData = useLoaderData()
    console.log(UData);

    const [usersData,setUserData] = useState(UData)

    const handleDelete =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://coffee-house-server-three.vercel.app/users/${id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.deletedCount>0){

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    const remaining = usersData.filter(item=> item._id !== id)
                    setUserData(remaining)
                    
                }
                
              })
            }
          });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-lg w-[80%] m-auto">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            usersData && usersData.map(item=><>
                            <tr className='hover'>
                            <th>1</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>Blue</td>
                            <td className='text-red-700 cursor-pointer text-3xl' onClick={()=> handleDelete(item._id)}><FaDeleteLeft/></td>
                        </tr>
                            </>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;