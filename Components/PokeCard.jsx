export const PokeCard = ({pokemonData, updateTime, onNext, onSaveData}) => {
  return (
    <div className="card ps-4 pe-4 text-bg-dark  mb-3" style={{width: 640}}>
      <div className="card-header bg-transparent border-primary text-center fs-3">
        {pokemonData.name}
      </div>
      <div className="row g-0 d-flex align-items-center text-center">
        <div className="col-md-4">
          <img
            src={pokemonData.img}
            className="img-fluid rounded-start"
            alt="Whoops! looks like there's no image for this pokemon"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-center fs-3"></h5>
            <p className="card-text fs-5 text-center">
              <strong>Pokemon id: </strong> {pokemonData.id}
            </p>
            <p className="card-text fs-5 text-center">
              <strong>Experience: </strong> {pokemonData.base_experience}
            </p>
            <div className="card-text fs-5 text-center">
              <strong>Abilities: </strong>
              <ul className="list-group-item list-group-flush">
                {pokemonData.abilities &&
                  pokemonData.abilities.map((ability, idx) => {
                    return (
                      <li key={idx} className="list-group-item">
                        {ability}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="card-text fs-5 text-center">
              <strong>Type: </strong>
              <ul className="list-group-item list-group-flush">
                {pokemonData.types &&
                  pokemonData.types.map((type, idx) => {
                    return (
                      <li key={idx} className="list-group-item">
                        {type}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-evenly mt-2 mb-2">
          <button onClick={onNext} type="button" className="btn btn-primary">
            Next pokemon
          </button>
          <button onClick={() => onSaveData(pokemonData)} type="button" className="btn btn-success">
            Save pokemon
          </button>
        </div>
        <div className="container mt-1 mb-1">
          <p className="card-text">
            <small className="text-muted">
              Updates automatically in {updateTime} seconds
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
