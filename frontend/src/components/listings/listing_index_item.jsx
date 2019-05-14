import React from 'react';
import './listing_index_item.css';
import { Link } from 'react-router-dom'

function formatDate(input) {
    let year = input.substring(0, 4);
    let month = input.substring(5, 7);
    let day = input.substring(8, 10);
    let time = input.substring(11, 16);

    return { date: year + "/" + month + "/" + day, time: time };
}

const ListingIndexItem=({listing}) =>{
    // debugger
    return (
    <div className="listing-item-outer-container"> 
        {/* <div className="listing-item-inner-container"> */}
            <div className="listing-item-header"> 
                <span>{listing.title}</span>
            </div>
            <div className="listing-item-middle-layer">
                <div className="listing-item-middle-left">
                    <Link to="">{listing.creatorImgUrl}</Link>
                    {/* Profile Picture */}
                </div>
                <div className="listing-item-middle-right">
                    {/* <span>{listing.username}</span> */}
                    <span>Username</span>
                    <span><b>Start</b>: {formatDate(listing.begin).date} @ {formatDate(listing.begin).time}</span>
                    {/* <br></br> */}
                    <span><b>End</b>: {formatDate(listing.end).date} @ {formatDate(listing.end).time}</span>
                    <span><b>Price</b>: ${listing.price}</span>
                </div>
            </div>
            <div className="listing-item-lower-layer">
                <span>{listing.description}</span>
            </div>
        {/* </div> */}
    </div>)
}
       
export default ListingIndexItem;


  // const showStyle = {

    //         width: '128px',
    //         height: '28px',
    //         fontFamily: 'Poppins',
    //         fontSize: '20px',
    //         fontWeight: '600',
    //         textDecoration: 'none',
    //         // fontStyle: 'normal',
    //         // fontStretch: 'normal',
    //         // lineHeight: 'normal',
    //         // letterSpacing: 'normal',
    //         color: '#EF5462'
    // }

// const ListingIndexItem = ({listing}) => {
//     // debugger
//     return (
//         <div className="the-box">
//             {/* no frontend route yet to listing show */}
//             <div>
//                 <Link className="listing-show" to="">{listing.title}</Link>
//             </div>
//             <div>
//                 <span>{listing.description}</span>
//             </div>
//             <div>
//                 <span>{listing.begin}</span>
//                 <span>{listing.end}</span>
//             </div>
//         </div>
//     )
  
// }

// export default ListingIndexItem;