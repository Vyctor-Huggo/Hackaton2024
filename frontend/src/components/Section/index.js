import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section style={{ margin: '3% 0' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
