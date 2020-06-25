import React from 'react';
import Library from '../components/Library';
import RestaurantItem from '../components/RestaurantItem';
import KitItem from '../components/KitItem';
import { getKits, getRestaurants } from '../api/CookitAPI';
import { useQuery } from 'react-query';

function Home() {
  const {
    status: kitStatus,
    data: kitData,
    isFetching: kitIsFetching,
    error: kitError,
  } = useQuery('kits', getKits, { staleTime: Infinity });
  const {
    status: restStatus,
    data: restData,
    isFetching: restIsFetching,
    error: restError,
  } = useQuery('restaurants', getRestaurants, { staleTime: Infinity });
  if (kitStatus === 'loading' || restStatus === 'loading') {
    return <div>loading...</div>; // loading state
  }
  if (kitStatus === 'error' || restStatus === 'error') {
    return (
      <div>
        {kitError.message}
        {restError.message}
      </div>
    ); // error state
  }
  return (
    <div className="LibraryContainer">
      {kitData && <Library pb={2} elements={kitData} Item={KitItem} title="Our kits" />}
      {restData && (
        <Library pb={2} elements={restData} Item={RestaurantItem} title="Our restaurants" />
      )}
      {(kitIsFetching || restIsFetching) && <p>updating...</p>}
    </div>
  );
}

export default Home;
