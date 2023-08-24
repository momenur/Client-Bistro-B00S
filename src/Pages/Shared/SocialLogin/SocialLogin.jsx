import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'user' }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
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
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-outline bg-[#D1A054] text-white w-full rounded-none">
                    <span className="text-xl"><FaGoogle /></span> Google Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;