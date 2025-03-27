import Header from "@/components/Header";
import IProduct, { ICategory } from "@/types/Types";
import { products } from "@/data/products";

function Products() {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row justify-around mt-5 space-x-6 w-full overflow-x-auto">
        {products.slice(0, 10).map((product: IProduct) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[350px] font-semibold text-4xl border-2 border-amber-500 rounded-lg p-4"
          >
            <a href={`/products/${product.id}`}>
              <img
                src={product?.image ? product.image : "/img/product.webp"}
                className="rounded-lg w-96 h-96 bg-cover"
              />
              <div className="flex justify-between mt-2">
                <div>{product.title}</div>
                <div>{product.price}₮</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
