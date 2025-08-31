// app/components/ProductCard.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
// This component just receives props and displays them.
export default function ProductCard({ title, description, imageUrl }) {
  return (
    <Link href="#" className="block">
      <motion.div
        className=" overflow-hidden rounded-[3px] mb-[32px] border border-[#e5e5e5] bg-white 
                    shadow-[0px_0px_8px_rgba(0,0,0,0.2)] transition-shadow duration-300 
                    hover:shadow-[0px_0px_12px_rgba(0,0,0,0.15)] gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} 
      >

        <div className="relative w-[362.663px] h-[362.663px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* The Text Content */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}