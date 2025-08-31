// lib/data.js

// This is where you'll store all the content for your site.
// We'll export different arrays for each section.

export const shopByCategoryItems = [
  { id: 'cat1', title: "Agriculture", description: "Farm-fresh fruits and vegetables.", imageUrl: "/agriculture.jpg" },
  { id: 'cat2', title: "Meat & Poultry", description: "Handmade with organic flour.", imageUrl: "/poultry.jpg" },
  { id: 'cat3', title: "Dairy", description: "Pasture-raised and full of flavor.", imageUrl: "/dairyEggs.jpg" },
  { id: 'cat4', title: "Seafood", description: "Your favorite everyday essentials.", imageUrl: "/sefood.jpg" },
  { id: 'cat5', title: "Processed Foods", description: "Farm-fresh fruits and vegetables.", imageUrl: "/processed-foods-6-1316x1536.webp" },
  { id: 'cat6', title: "Textiles", description: "Handmade with organic flour.", imageUrl: "/pexels-ian-panelo-20234940.jpg" },
   { id: 'cat7', title: "Cosmetics", description: "Handmade with organic flour.", imageUrl: "/poultry.jpg" },

];

export const storyBehindSmileItems = [
  { id: 'story1', title: "Our Origin", description: "Meet the people behind your food.", imageUrl: "/origin.jpg" },
  { id: 'story2', title: "How We Create", description: "Our commitment to the planet.", imageUrl: "/inspec.jpg" },
  { id: 'story3', title: "Why It Matters", description: "How your purchase helps others.", imageUrl: "/life.jpg" },
];

export const clientReviews = [
  { id: 'review1', title: "Sarah L.", description: "'The quality is unmatched! I can taste the difference.'", imageUrl: "/p1.jpg" },
  { id: 'review2', title: "David M.", description: "'My family loves the weekly produce box. So fresh!'", imageUrl: "/p3.jpg" },
  { id: 'review3', title: "Priya K.", description: "'I trust Hedamo for all my organic needs. Thank you!'", imageUrl: "/p2.jpg" },
];

export const allProducts = [...shopByCategoryItems, ...storyBehindSmileItems];