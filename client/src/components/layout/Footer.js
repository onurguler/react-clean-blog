import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <hr />

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </Link>
                </li>
              </ul>
              <p className="copyright text-muted">
                Copyright &copy; Your Website 2019
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
