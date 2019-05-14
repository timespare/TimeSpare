import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {

    componentDidMount() {
        this.props.getAllListings();
        // this.props.fetchUsers();
    }

    render() {
        let listings = this.props.listings.map(listing => {
            return (
                < ListingIndexItem
                    key={listing.id}
                    photo={listing}
                />
            )
        });
        return (
            <div className="listing-index-container">
                {listings}
            </div>
        );
    }
}
export default ListingIndex;