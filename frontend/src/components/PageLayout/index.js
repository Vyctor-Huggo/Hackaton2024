import React from 'react';
import Header from './../Header';
import Footer from './../Rodape';

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
