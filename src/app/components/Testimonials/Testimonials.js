"use client";

import { FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Student's Parent",
      content: "The coaching here has been transformative for my child. The teachers are attentive and the curriculum is excellent. My child's grades have improved significantly!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "High School Student",
      content: "I was struggling with mathematics, but thanks to the personalized attention I received, I've not only improved my grades but also developed a love for the subject.",
      rating: 4,
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "College Student",
      content: "The study materials and teaching methods are top-notch. The instructors go above and beyond to ensure every concept is clear and well-understood.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span 
        key={i} 
        className={`${styles.star} ${i < rating ? styles.filled : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <h2 className="sectionTitle">What Our Students Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <p className={styles.testimonialText}>{testimonial.content}</p>
              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>
              <div className={styles.author}>
                <h4 className={styles.authorName}>{testimonial.name}</h4>
                <p className={styles.authorRole}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;