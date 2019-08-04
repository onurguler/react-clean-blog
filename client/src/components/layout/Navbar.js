import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [showMenu, toggleMenu] = useState(false);

  const show = showMenu ? 'show' : '';

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/dashboard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link onClick={logout} className="nav-link" to="#">
          Logout
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          onClick={() => toggleMenu(!showMenu)}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars" />
        </button>
        <div
          className={`collapse navbar-collapse ${show}`}
          id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="post.html">
                Sample Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
            {
              <Fragment>
                {isAuthenticated ? (
                  authLinks
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/signin">
                      Login
                    </Link>
                  </li>
                )}
              </Fragment>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
