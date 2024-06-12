import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-black p-lg-4 p-sm-5 headnav col-12">
  <div className="container-fluid">
    <a className="navbar-brand ms-lg-5 ms-sm-0  text-white">BOOKS  <i className="bi bi-book "></i> AUTHORS</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2 col-lg-3 cols-sm-0" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success cols-sm-0" type="submit">Search</button>
    </form>
    <i className="bi bi-person-circle text-white "></i>
  </div>
</nav>
        </div>
    );
};

export default Header;