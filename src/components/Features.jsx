import React from 'react';

const Features = ({ features }) => {

    // console.log(features)

    return (
        <div>
            {features.map((feature, index) => (
                <div
                    key={feature.id}
                    className={`w-full py-10 ${index % 2 !== 0 ? "bg-base-200" : ""}`}
                >
                    <div
                        className={`flex flex-col lg:items-center gap-6 max-w-7xl mx-auto px-4
                        ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                        <img
                            className="w-full max-w-md h-60 lg:h-70 rounded-2xl mx-auto"
                            src={feature.image}
                            alt={feature.title}
                        />

                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl font-bold">{feature.title}</h2>
                            <p className="mt-2">{feature.description}</p>
                            <button className="mt-4 btn btn-primary">{feature.buttonText}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Features;