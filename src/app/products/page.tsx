import Header from "@/components/Header";
import IProduct, { ICategory } from "@/types/Types";

function Products() {
  console.log("testing on products page kkk");
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 2500,
    },
    {
      id: 2,
      title: "Product 2",
      price: 3500,
      image:
        "https://m.media-amazon.com/images/I/31C2qKTlFiL._AC_UF226,226_FMjpg_.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      price: 1500,
      image:
        "https://m.media-amazon.com/images/I/41tYtsPa6xL._AC_UF226,226_FMjpg_.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      price: 4500,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/045/132/934/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg",
    },
    {
      id: 5,
      title: "Product 5",
      price: 5500,
      image:
        "https://amateurphotographer.com/wp-content/uploads/sites/7/2017/11/Bliss_Copyright_preview.jpeg",
    },
    {
      id: 6,
      title: "Product 6",
      price: 5500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s",
    },
    {
      id: 7,
      title: "Product 7",
      price: 5500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaG46dvsdIdBpjYd2JKGCpTdiLa69XICcsjg&s",
    },
  ];

  console.log(products);
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
