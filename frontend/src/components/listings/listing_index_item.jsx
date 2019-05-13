import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = props => {

    return (
        <div className="listings-index-div">
            <Link to={`/listings/${props.listing.id}`}><div className="the-box"></div></Link>
            <div className="listing-index-detail">
                <Link to={`/listings/${props.listing.id}`}><h1 className="listing-index-description">{props.listing.description}</h1></Link>
                {/* <Link to={`/listings/${props.listing.id}`}><h3 className="listing-index-username">By {props.listing.user}</h3></Link> */}
            </div>
            {/* <Link to={`/listings/${props.listing.id}`}><img className="listing-image" src={props.listing.creatorImgUrl} alt="" /></Link> */}
        </div>
    );
}

export default ListingIndexItem;