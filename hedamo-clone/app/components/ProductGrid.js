// app/components/ProductGrid.js
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }) {
  if (items.length === 0) {
    return <p className="text-center my-12">No products found.</p>;
  }
  return (
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <ProductCard
          key={item.id || index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}