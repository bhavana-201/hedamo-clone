// app/components/HeroSection.js
"use client";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import Image from "next/image"; 

export default function HeroSection({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-center text-center text-white">
      
      <Image src="/pexels-ian-panelo-20234940.jpg" 
        alt="Background"
        fill 
        priority 
        sizes="100vw"
        style={{
          objectFit: "cover", 
          zIndex: -1,
        }}
      />

      <div className="absolute inset-0 bg-black/50" style={{ zIndex: -1 }} />
      <motion.div className="relative z-10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-8 text-[27px]">
          Discover and shop verified products, curated by HEDAMO experts.
        </h1>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <SearchIcon className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search for products that match your needs..."
            className="w-full rounded-lg border-none bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>
    </div>
  );
}