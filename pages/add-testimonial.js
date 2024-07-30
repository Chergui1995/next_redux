import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { add_testi_redux } from '../redux';
import styles from '../styles/AddTestimonial.module.css';

const AddTestimonial = ({ addTestimonial, user_email }) => {
  const [form, setForm] = useState({ id: '', name: '', message: '', email: user_email });
  const router = useRouter();

  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, email: user_email }));
  }, [user_email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial({ ...form, id: new Date().getTime() }); // Generating a unique id
    router.push('/testimonials');
  };

  return (
    <Layout>
      <div className={`container mt-5 ${styles.addTestimonialPage}`}>
        <h1 className="text-center mb-4">Add Testimonial</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="hidden"
            name="email"
            value={form.email}
          />
          <button type="submit" className="btn btn-primary">Add Testimonial</button>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user_email: state.auth_reducer.user_email,
});

const mapDispatchToProps = (dispatch) => ({
  addTestimonial: (testimonial) => dispatch(add_testi_redux(testimonial)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTestimonial);
