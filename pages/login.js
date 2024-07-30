import React, { useState, useEffect } from 'react';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { Login_redux } from '../redux';

const Login = ({ users, is_login, Login_redux }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!form.email) {
      errors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid.";
      valid = false;
    }

    if (!form.password) {
      errors.password = "Password is required.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = users.find(user => user.email === form.email && user.password === form.password);
      if (user) {
        Login_redux(user.email,user.password);
        console.log("Login successful", form);
      } else {
        setErrors({ email: 'Invalid credentials.', password: 'Invalid credentials.' });
      }
    }
  };

  useEffect(() => {
    if (is_login) {
      router.push('/');
    }
  }, [is_login, router]);

  return (
    <Layout>
      <div className={`container mt-5 ${styles.loginPage}`}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p className="mt-3">Don't have an account? <Link legacyBehavior href="/register"><a>Register</a></Link></p>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  is_login: state.auth_reducer.is_login,
  users: state.auth_reducer.users, // Assurez-vous que les utilisateurs sont disponibles ici
});

const mapDispatchToProps = (dispatch) => ({
  Login_redux: (email,password) => dispatch(Login_redux(email,password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
