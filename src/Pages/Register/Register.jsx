import { Link, useNavigate } from 'react-router-dom';
import imageAuthentication from '../../assets/authentication/authentication1.png'
import './Register.css'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
const Register = () => {
    const navigate = useNavigate();
    const from = "/"
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email, role: 'user'}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User Register Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true });
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <div className="min-h-screen background-authentication">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className='p-24'>
                <div className='items-center justify-center mx-auto inner-background-authentication drop-shadow-2xl md:flex'>
                    <div>
                        <h1 className='mb-4 text-3xl font-bold text-center'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card shadow-none flex-shrink-0 w-full md:min-w-[450px] bg-transparent">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold text-black label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' {...register("name", { required: true })} placeholder="Your Name" className="text-black input input-bordered" />
                                    {errors.name && <span className='pt-2 text-yellow-500'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold text-black label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' {...register("photo", { required: true })} placeholder="Photo URL" className="text-black input input-bordered" />{errors.photo && <span className='pt-2 text-yellow-500'>photoURL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold text-black label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="text-black input input-bordered" />{errors.email && <span className='pt-2 text-yellow-500'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold text-black label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' {...register("password", { required: true, minLength: 8 })} placeholder="password" className="text-black input input-bordered" />
                                    {errors.password?.type === 'required' && <p className='pt-2 text-yellow-500'>Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className='pt-2 text-yellow-500'>Password Must be 8 Characters</p>}
                                </div>
                                <div className="mt-6 form-control">
                                    <input className='bg-[#D1A054] py-3 text-white' type="submit" value="Sign Up" />
                                </div>
                                <div>
                                    <p className='text-[#D1A054] text-center mt-4'>Already registered? <span className='hover:text-blue-600'><Link to="/login">Go to Login</Link></span></p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={imageAuthentication} alt="" />
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Register;