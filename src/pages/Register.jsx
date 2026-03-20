import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { setUser, createUser, userProfile, signInWithGoogle } = useContext(AuthContext);
    // console.log(userProfile)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                toast.success("You've signed in successfully"),
                    userProfile({ displayName: name, photoURL: photoUrl })
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: photoUrl });
                        })
                        .catch((error) => {
                            console.log(error);
                            setUser(user);
                        })
            })
            .catch(error => console.log(error));

        // setUser({ email, password });
        console.log(name, photoUrl, email, password)
    }

    return (
        <div className='flex flex-col max-w-md items-center mx-auto justify-center py-20'>
            <form onSubmit={handleRegister} className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                <legend className="fieldset-legend text-2xl">Register</legend>

                <label className="label">Name</label>
                <input name="name" type="text" className="input" placeholder="Enter your name" required />

                <label className="label">Photo URL</label>
                <input name="photoUrl" type="text" className="input" placeholder="Enter your photo url" required />

                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Enter your email address" required />

                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Set a password" required />

                <p className='pt-4'>Already have an Account? <Link to={"/login"} className='text-blue-600 pl-2'>Please Login</Link></p>

                <button className="btn btn-neutral mt-4">Register</button>
            </form>
                <button onClick={() => {signInWithGoogle()}} className="btn btn-soft btn-info mt-4">Register with Google</button>
        </div>
    );
};

export default Register;