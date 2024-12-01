import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignUp =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        const signUpvalues = {email,password} 
        console.log(signUpvalues);


        createUser(email,password)
        .then(res=>{
            console.log(res.user);

            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(signUpvalues)

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    toast.success('You are sign in our website')
                    
                }
                form.reset()
                navigate("/")
                
            })
            
        })
        .catch(err=>{
            console.log('ERROR : ' ,err);
            
        })
        
    }
    return (
        <div>
            <div className="w-[40%] m-auto mt-[10%]">
                <div className="">
                    
                    <div className="card bg-base-100   shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body text-lg">
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input-bordered border border-black py-2 px-1
                                " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className=" input-bordered border border-black py-2 px-1" required />
                                <label className="label">
                                    
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#270b0b] text-white">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;