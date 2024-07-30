import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Testimonials.module.css';
import Layout from '../components/Layout';
import { connect } from 'react-redux';


const Testimonials = ({ testimonials, fetchTestimonials ,user_email }) => {

  useEffect(() => {
   
  }, [testimonials]);
  return (
    <Layout>
      <div className={`container mt-5 ${styles.testimonialsPage}`}>
        <h1 className="text-center mb-4">Témoignages</h1>
        <Link legacyBehavior href="/add-testimonial">
          <a className="btn btn-primary mb-4">Ajouter un témoignage</a>
        </Link>
        <div className="list-group">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={`list-group-item ${styles.listGroupItem}`}>
              <h5>{testimonial.name}</h5>
              <p>{testimonial.message}</p>
              {user_email==testimonial.email && <Link legacyBehavior href={`/edit-testimonial?id=${testimonial.id}`}>
                <a className="btn btn-secondary">Edit</a>
              </Link> }
              
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  testimonials: state.TestiReducer.testimonials, 
  user_email: state.auth_reducer.user_email,
});


const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
