import React from 'react';

const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white">
            <div className="text-2xl font-bold">Pier RealEstate</div>
            <div className="flex items-center space-x-2">
                <select className="bg-white text-black rounded px-2 py-1">
                    <option>Pakistan</option>
                    <option>Other Country</option>
                </select>
                <button className="bg-blue-500 px-4 py-1 rounded text-white">Rent</button>
                <input type="text" placeholder="Search here" className="px-2 py-1 rounded bg-white text-black" />
                <button className="bg-blue-500 px-4 py-1 rounded text-white">Sell</button>
                <div className="rounded-full bg-gray-700 p-2">
                    {/* Placeholder for Profile Image */}
                </div>
            </div>
        </div>
    );
};

export default Header;
