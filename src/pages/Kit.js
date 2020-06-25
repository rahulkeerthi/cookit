import React from 'react';
import { useQuery } from 'react-query';
import { getKit, getKits } from '../api/CookitAPI';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  useTheme,
  Typography,
  Divider,
} from '@material-ui/core';
import Image from '../components/Image';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../components/TabPanel';
import Library from '../components/Library';
import KitItem from '../components/KitItem';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    margin: '32px auto',
    spacing: 8,
  },
  left: {
    textAlign: 'left',
  },
  right: {},
  image: {
    height: 400,
  },
  tabContainer: {
    marginTop: 72,
  },
  link: {
    textDecoration: 'none',
  },
});

const Kit = ({ id }) => {
  const { status, data, isFetching } = useQuery(`${id}`, getKit, { staleTime: Infinity });
  const { status: kitsStatus, data: kitsData, isFetching: kitsIsFetching } = useQuery(
    'kits',
    getKits,
    { staleTime: Infinity },
  );
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // const { name, photos, price, restaurant, description, ingredients, link_url } = data;

  if (status === 'loading') {
    return <div>loading...</div>; // loading state
  }
  return (
    <Container>
      <Box className={classes.root}>
        <Grid container>
          {data && (
            <Grid item xs={12} lg={4} xl={4} className={classes.left}>
              <Box>
                <Typography className={classes.title} variant="h5">
                  {data.name}
                </Typography>
                <Typography className={classes.price} gutterBottom={true} variant="h6">
                  £{data.price}
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.description} variant="body1">
                  {data.description}
                </Typography>
                <Divider style={{ margin: '24px auto', width: 240 }} />
                <Typography className={classes.subtitle} variant="subtitle2">
                  Ingredients:
                </Typography>
                <Typography className={classes.ingredients} paragraph={true} variant="body2">
                  {' '}
                  {data.ingredients}
                </Typography>
              </Box>
              <Button
                className={classes.button}
                size="large"
                href={data.link_url}
                variant="contained"
                color="primary"
              >
                Visit the Website
              </Button>
            </Grid>
          )}
          <Grid item xs={12} lg={8} xl={8} className={classes.right}>
            <Grid container>
              <Grid item className={classes.image}>
                <Image
                  src={data.photos[0].service_url}
                  alt={data.name}
                  imageStyle={{ margin: '8px', height: '400px', objectFit: 'cover' }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.tabContainer}>
              <Grid item xs={12}>
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label={`Other Kits from ${data.restaurant.name}`} {...a11yProps(0)} />
                    <Tab label="Similar Kits" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    {kitsData && (
                      <Library pb={4} elements={kitsData.slice(0, 2)} Item={KitItem} title="" />
                    )}
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    {kitsData && (
                      <Library pb={4} elements={kitsData.slice(0, 2)} Item={KitItem} title="" />
                    )}
                  </TabPanel>
                </SwipeableViews>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {isFetching && <p>updating...</p>}
      </Box>
    </Container>
  );
};

export default Kit;
