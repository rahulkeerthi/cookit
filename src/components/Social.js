import React from 'react';
import { Container, makeStyles, Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const useStyles = makeStyles({
  socialContainer: {
    padding: 0,
    margin: '0 2rem',
  },
  social: {
    color: 'inherit',
    padding: '0.3rem',
    transition: 'transform 250ms',
    // '&:hover': {
    //   color: 'red',
    // },
    // marginRight: '1rem',
  },
  hover: {
    '&:hover': {
      color: 'red',
      transform: 'translateY(-2px)',
    },
  },
});

function Social({ restaurant }) {
  const classes = useStyles();
  const { twitter, instagram, facebook, email } = restaurant;

  return (
    <Container className={classes.socialContainer} display="flex">
      {facebook && (
        <Link
          href={facebook}
          classes={{ root: classes.social, underlineHover: classes.hover }}
          // className={classes.social}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
      )}
      {instagram && (
        <Link
          href={instagram}
          classes={{ root: classes.social, underlineHover: classes.hover }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
      )}
      {twitter && (
        <Link
          href={twitter}
          classes={{ root: classes.social, underlineHover: classes.hover }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
      )}
      {email && (
        <Link
          href={'mailto:' + email}
          classes={{ root: classes.social, underlineHover: classes.hover }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Link>
      )}
    </Container>
  );
}

export default Social;
