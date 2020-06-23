import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
// import Price from './Price';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 350,
    maxWidth: 500,
    spacing: 8,
  },
  media: {
    height: 200,
    marginBottom: 10,
  },
});

export default function Restaurant({ restaurant }) {
  const classes = useStyles();
  const { id, photos, name, city, tags, kits } = restaurant;

  return (
    <Card elevation={3} key={id} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photos[0].service_url}
          title="Contemplative Reptile"
        />
        {tags.map((tag) => (
          <Chip key={tag.id} label={tag.name} variant="outlined" m={1} />
        ))}
        <CardContent>
          <Typography gutterBottom component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            {city}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            {kits.length > 1 ? `${kits.length} kits ` : `${kits.length} kit `}
            available
          </Typography> */}
          {/* <Price price={restaurant.price}/> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(),
    city: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf().isRequired,
    kits: PropTypes.arrayOf().isRequired,
  }).isRequired,
};
