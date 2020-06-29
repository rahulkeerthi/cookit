import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Container } from '@material-ui/core';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

const useStyles = makeStyles({
  root: {},
});

function SearchBar() {
  const classes = useStyles();
  // const searchClient = algoliasearch('plDD180VQEY1',
  // process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY);
  const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
  // const indexName = client.initIndex('your_index_name');

  return (
    <Container className={classes.root}>
      <header className="header">
        <SearchBox className="search-bar" translations={{ placeholder: 'Search for Movies' }} />
      </header>
      <Typography align="center" gutterBottom color="textSecondary">
        Search a kit
      </Typography>
      <InstantSearch searchClient={searchClient} indexName="movies"></InstantSearch>
    </Container>
  );
}

export default SearchBar;
