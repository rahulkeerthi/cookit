const Hit = ({ hit }) => (
  <a href={'/'}>
    <div className="card">
      <div className="card-image">
        <img src={hit.image} alt={hit.name} className="image" />
      </div>
      <div className="card-contents">
        <Highlight attribute="title" hit={hit} className="card-title" />
        <Highlight attribute="year" hit={hit} className="card-year" />
        <div className="card-rating">Rating: {hit.rating}</div>
        <div className="card-genre">
          {' '}
          <span>{hit.genre[0]}</span> <span>{hit.genre[1]}</span>{' '}
        </div>
      </div>
    </div>
  </a>
);
