import { Link, useLocation, useNavigate } from 'react-router-dom';
import imageAuthentication from '../../assets/authentication/authentication1.png'
import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Register Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, { replace: true });
            })
    }
    return (
        <div className="min-h-screen background-authentication">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className='p-24'>
                <div className='items-center justify-center mx-auto inner-background-authentication drop-shadow-2xl md:flex'>
                    <div>
                        <img src={imageAuthentication} alt="" />
                    </div>
                    <div>
                        <h1 className='mb-4 text-3xl font-bold text-center'>Login</h1>
                        <form onSubmit={handleLogin} className="card shadow-none flex-shrink-0 w-full md:min-w-[450px] bg-transparent">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold text-black label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="text-black input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold text-black label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="text-black input input-bordered" />
                                </div>
                                <div className="mt-6 form-control">
                                    <input className='bg-[#D1A054] py-3 text-white' type="submit" value="Login" />
                                </div>
                                <div>
                                    <p className='text-[#D1A054] text-center mt-4'>New here? <span className='hover:text-blue-600'><Link to="/register">Create a New Account</Link></span></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;