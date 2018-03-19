import React from 'react';

const Signup = () => {
  return (
    <div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: 'url(assets/img/bg-girl.jpg)' }}>
      <div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
        <h5 className="text-uppercase text-center">Register</h5>
        <br />
        <br />
        <form className="form-type-material">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Email address" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password (confirm)" />
          </div>
          <br />
          <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
        </form>
        <hr className="w-30" />
        <p className="text-center text-muted fs-13 mt-20">Already have an account?
      <a href="login.html">Sign in</a>
        </p>
      </div>
    </div>

  );
};

export default Signup;
