import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { userLogin } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(
                () => {alert("you've logged in successfully")}
            )
            .catch(error => console.log(error));
    }

    return (
        <div className='flex justify-center py-20'>
            <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                <legend className="fieldset-legend text-2xl">Login</legend>

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <p className='pt-4'>Forgot Password? <a className='text-blue-600 pl-2 hover:cursor-pointer'>Click Here</a></p>

                <p>Don't have an Account? <Link
                    to={"/register"}
                    className='text-blue-600 pl-2'>Please Register</Link></p>

                <button className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default Login;