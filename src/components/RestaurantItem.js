import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 350,
    maxWidth: 500,
    spacing: 8,
    minHeight: '100%',
  },
  media: {
    height: 200,
    marginBottom: 10,
  },
  link: {
    textDecoration: 'none',
  },
});

export default function RestaurantItem({ restaurant }) {
  const classes = useStyles();
  const deliveryOptions = restaurant.delivery_options;
  const kitCount = restaurant.kit_count;
  const { id, photos, name, tags } = restaurant;

  return (
    <Link to={`restaurant/${id}`} className={classes.link}>
      <Card elevation={3} key={id} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={photos[0].service_url}
            title={name}
            alt={name}
          />
          {tags.map((tag) => (
            <Chip key={tag.id} label={tag.name} variant="outlined" m={1} />
          ))}
          <CardContent>
            <Typography gutterBottom component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              {deliveryOptions}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              {kitCount > 1 ? `${kitCount} kits ` : `${kitCount} kit `}
              available
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

RestaurantItem.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.object),
    delivery_options: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    kit_count: PropTypes.number.isRequired,
  }).isRequired,
};
