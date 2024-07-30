import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import { Logout_redux } from '../redux';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const Header = (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!props.is_login) {
      router.push('/login');
    }
  }, [props.is_login]);
  const handleLogout = () => {
    props.Logout_redux();
  };
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link legacyBehavior href="/">
            <a className="navbar-brand">Portfolio</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              {props.is_login ? (
                <>
                  <li className="nav-item">
                    <Link legacyBehavior href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link legacyBehavior href="/projects">
                      <a className="nav-link">Projects</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link legacyBehavior href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link legacyBehavior href="/testimonials">
                      <a className="nav-link">Testimonials</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleLogout}>Logout</a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link legacyBehavior href="/login">
                      <a className="nav-link">Login</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link legacyBehavior href="/register">
                      <a className="nav-link">register</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
const mapStateToProps = (state) => ({
  is_login:state.auth_reducer.is_login,

})

const mapDispatchToProps = dispatch =>{
  return{
    Logout_redux: (navigate) => dispatch(Logout_redux( navigate)),
  }
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header)