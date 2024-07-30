import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { Register_redux } from '../redux';
import styles from '../styles/Register.module.css';

const Register = ({ registerUser }) => {
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
      registerUser(form.email, form.password);
      router.push('/login');
    }
  };

  return (
    <Layout>
      <div className={`container mt-5 ${styles.registerPage}`}>
        <h1 className="text-center mb-4">Register</h1>
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
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerUser: (email, password) => dispatch(Register_redux(email, password)),
});

export default connect(null, mapDispatchToProps)(Register);
