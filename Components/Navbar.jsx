export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/pokeball.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top ms-3 me-4"
          />
          POKEDEX
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Show pokedex
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Saved pokemons
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
