import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { ArrowTop } from './ScrollUp.styled';


export default function ScrollUp() {
  return (
    <ScrollToTop
      showUnder={150}
      duration={500}
      style={{ right: 50, bottom: 10 }}
    >
        <ArrowTop/>
    </ScrollToTop>
  );
};