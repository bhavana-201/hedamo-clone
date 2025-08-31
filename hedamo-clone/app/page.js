// app/page.js
"use client";
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CarouselSection from './components/CarouselSection';
import ProductGrid from './components/ProductGrid'; 
import SectionDivider from "./components/SectionDivider";
import Button from "./components/Button";
import Join from './components/Join';
import Footer from './components/Footer';
import { shopByCategoryItems, storyBehindSmileItems, clientReviews, allProducts } from './lib/data';

export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const filtered = allProducts.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <main>
      <Navbar />
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
      />
      
      <div className="container mx-auto px-4">
        {searchQuery.trim() === '' ? (
          <>
            <section className="section-container pt-[40px] pb-[20px]">
              <SectionDivider />
              <CarouselSection title="The HEDAMO Collection" items={shopByCategoryItems} />
              <Button content={<span>Explore Collections</span>} />
            </section>

            <section className="section-container pt-[40px] pb-[20px]">
              <SectionDivider />
              <CarouselSection title="The Story Behind the Smile" items={storyBehindSmileItems} />
            </section>

            <section className="section-container pt-[40px] pb-[20px]">
              <SectionDivider />
              <CarouselSection title="Client Reviews" items={clientReviews} />
              <Button content={<span>See All Reviews</span>} />
            </section>
          </>
        ) : (
          <ProductGrid items={searchResults} />
        )}
      </div>
      <Join />
      <Footer />
      
    </main>
  );
}