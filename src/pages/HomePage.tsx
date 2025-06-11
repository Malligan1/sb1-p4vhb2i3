import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCategories from '../components/ProductCategories';
import BlogSection from '../components/BlogSection';
import PartnersSection from '../components/PartnersSection';
import SocialGallery from '../components/SocialGallery';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <BlogSection />
      <PartnersSection />
      <SocialGallery />
    </div>
  );
};

export default HomePage;