import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const { user, setUser, userProfile, userEmail } = useContext(AuthContext);
    const modalRef = useRef();
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [email, setEmail] = useState(user?.email || "");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    const handleUpdate = async () => {
        setLoading(true);
        setMessage("");

        try {
            // Only update name/photo if changed
            if (
                (name && name !== user.displayName) ||
                (photo && photo !== user.photoURL)
            ) {
                await userProfile({
                    displayName: name,
                    photoURL: photo,
                });
            }

            // Only update email if changed
            if (email !== user.email) {
                await userEmail(email);
            }

            setUser({
                ...user,
                displayName: name,
                photoURL: photo,
                email: email
            });

            setMessage("✅ Profile updated successfully");

            setTimeout(() => {
                modalRef.current.checked = false;
            }, 800);
        } catch (error) {
            setMessage("❌ " + error.message);
        }

        setLoading(false);
    };

    const isChanged =
        name !== user.displayName ||
        photo !== user.photoURL ||
        email !== user.email;

    return (
        <div className="max-w-md mx-auto my-10">

            {/* Profile Card */}
            <div className="card bg-base-200 shadow-lg p-6 m-4 text-center">

                <img
                    src={user?.photoURL}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-primary object-cover"
                />

                <h2 className="text-2xl font-bold mt-4">
                    {user?.displayName}
                </h2>

                <p className="opacity-70">{user?.email}</p>

                {/* Open Modal Button */}
                <label htmlFor="update-modal" className="btn btn-primary mt-6 w-full">
                    Update Profile
                </label>
            </div>

            {/* Modal */}
            <input type="checkbox" id="update-modal" className="modal-toggle" ref={modalRef}/>

            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Update Profile</h3>

                    {/* Name */}
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="input input-bordered w-full mb-3"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input input-bordered w-full mb-3"
                    />

                    {/* Photo URL */}
                    <input
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        placeholder="Photo URL"
                        className="input input-bordered w-full mb-3"
                    />

                    {/* Message */}
                    {message && (
                        <p className="text-sm mt-2">{message}</p>
                    )}

                    {/* Actions */}
                    <div className="modal-action">
                        <label htmlFor="update-modal" className="btn">
                            Cancel
                        </label>

                        <button
                            onClick={handleUpdate}
                            className="btn btn-primary"
                            disabled={!isChanged}
                        >
                            {loading ? "Updating..." : "Save"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;