"use client";
import { useRef } from "react";
import ProductCard from "./ProductCard"; // Re-using our card component
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CarouselSection({ title, items }) {
  const scrollContainerRef = useRef(null);

  // Function to scroll to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // We scroll by 90% of the container's width for a smooth multi-item scroll
      scrollContainerRef.current.scrollLeft += scrollContainerRef.current.offsetWidth * 0.9;
    }
  };

  // Function to scroll to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.offsetWidth * 0.9;
    }
  };

  return (
    <div className="section-container">
      <div className="flex items-center justify-between pt-[32px] leading-[1.2]">
        <h2 className="text-[40px] mb-[32px] font-medium text-[#191919]">{title}</h2>
        <div className="flex gap-2">
          <IconButton onClick={scrollLeft} size="small" sx={{ border: '1px solid #ddd' }}>
            <ArrowBackIosNewIcon fontSize="inherit" />
          </IconButton>
          <IconButton onClick={scrollRight} size="small" sx={{ border: '1px solid #ddd' }}>
            <ArrowForwardIosIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>

      {/* Horizontally Scrolling Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {items.map((item, index) => (
          // Each card needs a defined width and shouldn't shrink
          <div key={index} className="flex-shrink-0 snap-start" style={{ width: '350px' }}>
            <ProductCard
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}