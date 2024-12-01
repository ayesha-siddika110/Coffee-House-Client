import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const {LoginUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        const signUpvalues = {email,password} 
        console.log(signUpvalues);


        LoginUser(email,password)
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
               
                toast.success('Successfully login')
                    
                
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
                        <form onSubmit={handleLogin} className="card-body text-lg">
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
                                <button className="btn bg-[#270b0b] text-white">Login</button>
                            </div>
                            <p>New to Coffee House ? please <Link to="/login" className="text-blue-800 text-2xl font-semibold" >Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;