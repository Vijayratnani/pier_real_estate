import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-100 p-4">
            <h2 className="text-xl font-semibold mb-4">Property Type</h2>
            <div className="space-y-2">
                <label><input type="checkbox" /> House</label>
                <label><input type="checkbox" /> Apartment</label>
                <label><input type="checkbox" /> Rooms</label>
                <label><input type="checkbox" /> Townhouses</label>
            </div>

            {/* Repeat for other sections like Rooms, Square Footage, Amenities, etc. */}
        </div>
    );
};

export default Sidebar;
