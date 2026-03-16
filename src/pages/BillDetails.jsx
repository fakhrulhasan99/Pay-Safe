import React from 'react';
import { useLocation } from 'react-router';

const BillDetails = () => {

    const location = useLocation();
    const { bill } = location.state;

    if (!bill) {
        return <p className="text-center mt-10">No bill selected.</p>;
    }

    const dueDate = new Date(bill["due-date"]).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="max-w-3xl w-11/12 mx-auto my-20 p-6 bg-base-200 shadow-lg rounded-lg flex flex-col md:flex-row items-center gap-6">
            
            <div className="shrink-0">
                <img src={bill.icon} alt={bill.bill_type} className="w-32 h-32" />
            </div>

            <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-bold">{bill.organization}</h2>
                <p className="text-gray-300 italic capitalize">{bill.bill_type} Bill</p>
                <p className="text-gray-400 font-semibold">Amount: {bill.amount} BDT</p>
                <p className="text-gray-500">Due Date: {dueDate}</p>
                <button className="btn btn-success mt-4">Pay Bill</button>
            </div>
        </div>
    );
};

export default BillDetails;