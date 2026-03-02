import React from 'react';
import Hero from '../components/Hero';
import HomeHighlights from '../components/HomeHighlights';
import HowItWorks from '../components/HowItWorks';
import FeaturedGuides from '../components/FeaturedGuides';
import EmailCapture from '../components/EmailCapture';
import FAQPreview from '../components/FAQPreview';

function HomePage() {
  return (
    <>
      <Hero />
      <HomeHighlights />
      <FeaturedGuides />
      <HowItWorks />
      <EmailCapture />
      <FAQPreview />
    </>
  );
}

export default HomePage;
