import React from 'react';
import { useQuery } from 'react-query';
import { getKit } from '../api/CookitAPI';

const Kit = ({ id }) => {
  const { status, data, isFetching } = useQuery(`${id}`, getKit, { staleTime: Infinity });

  if (status === 'loading') {
    return <div>loading...</div>; // loading state
  }
  return (
    <div>
      <div>{data.name}</div>
      <div>Kit Show Page</div>
      <div>Lots of Content</div>
      <div>Look at this</div>
      {isFetching && <p>updating...</p>}
    </div>
  );
};

export default Kit;
