import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import SearchContent from './SearchContent';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
} from 'react-instantsearch-dom';

const useStyles = makeStyles({
  root: {},
});
const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
// const searchClient = algoliasearch('plDD180VQEY1', process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY);
// const indexName = client.initIndex('your_index_name');

function SearchBar() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography align="center" gutterBottom color="textSecondary">
        Search a kit
      </Typography>
      <InstantSearch searchClient={searchClient} indexName="movies">
        <header className="header">
          <SearchBox className="search-bar" translations={{ placeholder: 'Search for Movies' }} />
        </header>
        <div className="body-content">
          <SearchContent />
        </div>
      </InstantSearch>
    </Container>
  );
}

export default SearchBar;
