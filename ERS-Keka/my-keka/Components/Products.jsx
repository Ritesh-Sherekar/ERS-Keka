import ProductCard from "./ProductCard";
import { products } from "../data/productData";

function Products() {
  return (
     <div className="ml-16 mr-16 mt-10 mb-20 font-arial">
      <h1 className="text-4xl text-center font-bold text-[#2C2E31] pt-3.5 pb-3.5">
        Everything you need to create a high <br /> performance culture
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-8">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
