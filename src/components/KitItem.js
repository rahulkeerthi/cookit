import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Price from './Price';

const useStyles = makeStyles({
  root: {
    // margin: 'auto',
    width: 300,
    // maxWidth: 400,
    spacing: 4,
    minHeight: 400,
  },
  kitName: {
    lineClamp: 2,
    overflow: 'hidden',
    display: '-webkit-box',
    boxOrient: 'vertical',
  },
  media: {
    height: 200,
    marginBottom: 10,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
});

export default function KitItem({ element }) {
  const classes = useStyles();
  const { id, photos, restaurant, name, price } = element;

  return (
    <Card elevation={3} key={id} className={classes.root}>
      <Link to={`/kit/${id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia className={classes.media} image={photos[0].service_url} title={name} />
          {restaurant.tags.map((tag) => (
            <Chip key={tag.id} label={tag.name} variant="outlined" margin="1rem" />
          ))}
          <CardContent>
            <Typography className={classes.kitName} gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" gutterBottom>
              {restaurant.name}
            </Typography>
            <Price price={price} />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

KitItem.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.object),
    price: PropTypes.number.isRequired,
    restaurant: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
