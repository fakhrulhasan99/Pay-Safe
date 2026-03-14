import React from 'react';
import { useLoaderData } from 'react-router';

const Bills = () => {

    const bills = useLoaderData();

    return (
        <div className="max-w-2xl mx-auto grid gap-6 pb-6">
            {bills.map((bill) => (
                <div key={bill.id} className="card bg-base-200 shadow-md p-4 flex flex-row items-center justify-between">

                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12" src={bill.icon} alt={bill.bill_type} />

                        <div>
                            <h2 className="font-bold capitalize">{bill.bill_type}</h2>
                            <p className="text-sm">{bill.organization}</p>
                            <p className="text-sm text-gray-500">
                                Due: {new Date(bill["due-date"]).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="font-semibold">৳{bill.amount}</p>
                        <button className="btn btn-primary btn-sm mt-2">Pay</button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Bills;