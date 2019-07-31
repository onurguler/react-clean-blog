import React from 'react';

import home from '../../img/home-bg.jpg';

const LoginHeader = props => {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url(${home})`
      }}>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Login</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;
