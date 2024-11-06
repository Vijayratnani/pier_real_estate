import React from 'react';

const PropertyCard = ({ price, location, bedrooms, bathrooms, area }) => {
    return (
        <div className="bg-white shadow-md rounded p-4">
            <img src="/placeholder.jpg" alt="Property" className="rounded w-full h-48 object-cover" />
            <h3 className="text-lg font-semibold mt-2">${price}</h3>
            <p>{location}</p>
            <div className="flex justify-between mt-2 text-gray-500">
                <span>{bedrooms} BHK</span>
                <span>{bathrooms} Bathrooms</span>
                <span>{area} sqft</span>
            </div>
        </div>
    );
};

export default PropertyCard;
