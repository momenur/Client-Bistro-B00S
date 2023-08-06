import { Link } from 'react-router-dom';
import imageAuthentication from '../../assets/authentication/authentication1.png'
import './Login.css'
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="min-h-screen background-authentication">
            <div className='p-24'>
                <div className='inner-background-authentication drop-shadow-2xl mx-auto md:flex justify-center items-center'>
                    <div>
                        <img src={imageAuthentication} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center font-bold text-3xl mb-4'>Login</h1>
                        <form onSubmit={handleLogin} className="card shadow-none flex-shrink-0 w-full md:min-w-[450px] bg-transparent">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-black">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input text-black input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-black">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="text-black input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
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