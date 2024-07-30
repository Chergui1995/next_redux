import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

const Layout = ({ children, is_login }) => {
  const router = useRouter();


  React.useEffect(() => {
    if (!is_login && router.pathname !== '/register') {
      router.push('/login');
    }
  }, [is_login]);
  React.useEffect(() => {
    if (!is_login && router.pathname !== '/login') {
      router.push('/register');
      
    }
  }, [is_login]);
  return (
    <>
      <Header />
      {is_login ? (
        <main>{children}</main>
      ) : (
        router.pathname === '/login' || router.pathname === '/register' ? (
          <main>{children}</main>
        ) : null
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  is_login:state.auth_reducer.is_login,
});

export default connect(mapStateToProps)(Layout);
