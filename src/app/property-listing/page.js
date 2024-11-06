// src/app/property-listing/page.js

import React from 'react';
import Header from '@/app/components/PropertyListing/Header';
import Sidebar from '@/app/components/PropertyListing/Sidebar';
import PropertyCard from '@/app/components/PropertyListing/PropertyCard';

export default function PropertyListingPage() {
    return (
        <div className="property-listing-page">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="property-cards">
                    {/* Example: You can replace the sample data with actual data */}
                    <PropertyCard data={{ 
                        id: 1, 
                        title: "4 BHK Apartment", 
                        location: "123 Main St", 
                        price: "$546,099", 
                        image: "/images/sample.jpg" 
                    }} />
                </div>
            </div>
        </div>
    );
}
