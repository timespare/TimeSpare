import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({listing}) => {
    // debugger
    return (
        <div className="the-box">
            {/* no frontend route yet to listing show */}
            <div>
                <Link className="listing-show" to="">{listing.title}</Link>
            </div>
            <div>
                <span>{listing.description}</span>
            </div>
            <div>
                <span>{listing.begin}</span>
                <span>{listing.end}</span>
            </div>
        </div>
    )
  
}

export default ListingIndexItem;