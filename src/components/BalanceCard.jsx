import React from 'react';
import refer from '../assets/share.png'

const BalanceCard = () => {

    return (
        <div className="hero bg-base-200 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto p-4">
                <img
                    src={refer}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Get ৳10 for
                        referring a friend!</h1>
                    <p className="py-6">
                        Invite a friend who doesn't have PaySafe and you can get ৳10 each. Terms apply. Offer may be canceled or modified at any time.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BalanceCard;