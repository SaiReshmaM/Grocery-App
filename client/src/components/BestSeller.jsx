import { products } from "../assets/products";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 xl:px-32 py-8">
      <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.slice(0, 5).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
