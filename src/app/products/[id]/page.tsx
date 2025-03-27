"use client";
import React, { useState, useEffect, use } from "react";
import { products } from "@/data/products";
import IProduct, { ProductParams } from "@/types/Types";

function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  let filteredProduct = products.filter((p) => p.id == Number(id));
  const [counter2, setCounter2] = useState(0);
  const [counter, setCounter] = useState(0);
  const [cartItems, setCartItem] = useState<IProduct[]>([]);

  if (filteredProduct.length == 0) return <div>Product not found</div>;

  useEffect(() => {
    console.log(filteredProduct);

    console.log("Counter Effected");
  }, [counter]);

  useEffect(() => {
    console.log("Cart items Effected");
  }, [cartItems]);

  const addToCart = (item: IProduct[]) => {
    setCartItem(item);
  };

  const countingCart = (type: string) => {
    setCounter2(counter2+1);
    if (type == "+") setCounter(counter + 1);
    else {
      if (counter < 1) return;
      setCounter(counter - 1);
    }
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl">
        {filteredProduct[0].title} - {id}
      </h1>
      <img src={filteredProduct[0].image} className="rounded-lg w-1/2 mt-2" />
      <button
        className="bg-amber-500 text-white w-28 rounded-2xl mt-4"
        onClick={() => {
          addToCart(filteredProduct);
          countingCart("+");
          console.log(cartItems);
        }}
      >
        Add to cart
      </button>
      <button
        className="bg-pink-500 text-white w-28 rounded-2xl mt-4"
        onClick={() => {
          countingCart("-");
        }}
      >
        Minus
      </button>
      <span className="text-lg font-bold">({counter})({counter2})</span>

      <div className="flex items-center justify-between w-full">
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>
              <img src={item.image} className="w-33 h-33" />
            </div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
