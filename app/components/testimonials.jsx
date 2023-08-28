import React from 'react';
import { feedback } from '../constants';
import styles from '../styles';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id="clients" className={` w-full flex pl-4 flex-col relative`}>
    <div />
    <div className="w-full flex justify-center items-center md:flex-row  sm:mb-16 mb-6 ">
      <h1 className={` ${styles.heading2} text-center`}>
        What People Are Saying About Us
      </h1>
    </div>
    
    <div className="flex flex-wrap justify-center">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
