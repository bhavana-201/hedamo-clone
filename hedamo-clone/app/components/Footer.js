"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#191919]">
      {/* Top Section with Background Image */}
      <section className="relative w-full h-80">
        <Image
          src="/footer.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
                        bg-white shadow-lg rounded-md px-6 py-6 w-3/4 max-w-2xl
                        shadow-[0px_0px_8px_rgba(0,0,0,0.2)] text-center z-10">
          <h1 className="text-2xl font-medium">Get Your Organic Certification</h1>
          <h2 className="text-lg font-medium mt-2">Choose Your Plan</h2>
          <p className="mt-2 text-sm text-gray-600">
            Choose the perfect plan for your needs and boost your market credibility.
          </p>
        </div>
      </section>
    {/* grid to display links in 3 cols*/}
      <section className="max-w-7xl mx-auto px-6 mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">Shop</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Shipping & Returns</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Join Our Community</h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe for updates and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-300 text-black w-full"
            />
            <button className="bg-[#004D40] text-white px-4 rounded-r-md font-medium">
              Join
            </button>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hedamo. All rights reserved.
      </div>
    </footer>
  );
}
