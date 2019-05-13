import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { getAllListings } from '../../actions/listings_actions';
// import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
    let listings = Object.values(state.entities.listings);
    // let users = state.entities.users;
    return {
        listings: listings
        // users: users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllListings: () => dispatch(getAllListings()),
        // fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);