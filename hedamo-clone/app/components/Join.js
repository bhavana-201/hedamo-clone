"use client";
import Image from "next/image";
export default function Join() { 
  return (
    <section className="section-container flex flex-col items-center justify-center 
                        border-[4px] border-[#004D40] text-[#004D40] bg-white  
                        my-12 mx-4  py-12 px-6 shadow-sm"
    >
        <div className="relative -top-20 z-10 bg-white px-4">
            <Image 
            src="/hedamo-logo.webp" 
            alt="HEDAMO Logo" 
            width={200} 
            height={80} 
            className="object-contain"
        />
      </div>
      
      <h2 className="text-center text-[32px] font-medium mb-4">
        Become A Part Of The Hedamo Family
      </h2>
      
      <p className="text-center text-lg mb-8 max-w-xl">
        At Hedamo, we believe small choices lead to big change — and it starts with us.
      </p>
      
      <button 
        className="bg-[#004D40] text-white px-8 py-3 rounded-md 
                   hover:bg-[#00332c] transition-colors duration-300"
      >
        Join Us
      </button>
    </section>
  );
}
