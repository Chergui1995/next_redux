import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { edit_testi_redux } from '../redux';
import styles from '../styles/EditTestimonial.module.css';

const EditTestimonial = ({ testimonials, editTestimonial }) => {
  const router = useRouter();
  const { id } = router.query; // Get the testimonial ID from the URL
  const [form, setForm] = useState({ id: '', name: '', message: '' });

  useEffect(() => {
    const testimonial = testimonials.find(t => t.id === parseInt(id));
    if (testimonial) {
      setForm(testimonial);
    }
  }, [id, testimonials]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTestimonial(form);
    router.push('/testimonials');
  };

  return (
    <Layout>
      <div className={`container mt-5 ${styles.editTestimonialPage}`}>
        <h1 className="text-center mb-4">Edit Testimonial</h1>
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
          <button type="submit" className="btn btn-primary">Edit Testimonial</button>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  testimonials: state.TestiReducer.testimonials,
});

const mapDispatchToProps = (dispatch) => ({
  editTestimonial: (testimonial) => dispatch(edit_testi_redux(testimonial)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTestimonial);
