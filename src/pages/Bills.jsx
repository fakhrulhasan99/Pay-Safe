import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigation, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Bills = () => {

    const navigation = useNavigation();
    const bills = useLoaderData();
    const { category } = useParams();
    const { paidBills } = useContext(AuthContext);

    if (navigation.state === "loading") {
        return (
            <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    const filteredBills = category
        ? bills.filter(bill => bill.bill_type === category)
        : bills;
    // console.log(bills)

    return (
        <div className="max-w-2xl mx-auto grid gap-6 pb-6">
            <h1 className="text-3xl font-bold mb-6 capitalize">
                {category ? `${category} Bills` : "All Bills"}
            </h1>
            {filteredBills.map((bill) => (
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
                        <Link
                            to={"/bill-details"}
                            state={{ bill }}
                            className={`mt-2 btn btn-sm ${paidBills.includes(bill.id) ? "btn-success" : "btn-primary"}`}
                        >
                            {paidBills.includes(bill.id) ? "Paid" : "Pay"}
                        </Link>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Bills;