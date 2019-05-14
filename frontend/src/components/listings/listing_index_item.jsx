import React from 'react';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 600,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '40px'
        // mb: 'margin-bottom'
        // columnGap: '400px'
        // padding: theme.spacing.unit * 2
        // flexGrow: 1
        // spacing: '16'
        // width: '40%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    }
};

function ListingIndexItem(props) {
    const { classes } = props;
    const listing = props.listing;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        // <div>
        //     
        // </div>
        // <div>
        //     <span>{listing.description}</span>
        // </div>
        // <div>
        //     <span>{listing.begin}</span>
        //     <span>{listing.end}</span>
        // </div>
        <Card className={classes.card}>
            <CardContent>
                <Link className="listing-show" to="">{listing.title}</Link>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {listing.description}
                </Typography>
                <Grid item>
                    <Typography variant="subtitle1">${listing.price}</Typography>
                </Grid>
                <Typography >
                    {listing.begin}
                </Typography>
                <Typography >
                    {listing.end}
                </Typography>
            </CardContent>
            <CardContent>
                <Button size="small">Tags</Button>
                {/* <Button size="small">Tags</Button> */}
            </CardContent>
        </Card>
    );
}

ListingIndexItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingIndexItem);

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