import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Product } from "~/types/productTypes";

const BrowserProductComponent: React.FC<Product> = ({
  productId,
  price,
  priceSale,
  availableSizes,
  productName,
}) => {
  const [isHovering, setHover] = useState(false);

  const discountRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex w-fit cursor-default select-none flex-col items-center gap-2 rounded-xl bg-white shadow-[0_0_6px_2px_rgba(0,0,0,0.1)]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {priceSale !== undefined && priceSale < price ? (
        <div className="product-price absolute right-0 top-0 z-20 m-2 flex rounded-md bg-green-600 p-1 text-white">
          R$ {priceSale.toFixed(2)}
          <div className="mx-2 w-[1px] bg-white"></div>
          {Math.abs((priceSale / price - 1) * 100).toFixed(0)}%
          <div
            style={{
              width: !isHovering
                ? "0"
                : (() => {
                    if (!discountRef.current) return "0";

                    const width = `${discountRef.current.clientWidth}px`;
                    return width;
                  })(),
            }}
            className="overflow-hidden duration-75"
          >
            <div className="discount flex w-fit" ref={discountRef}>
              <p className="pl-1">desconto</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-price absolute right-0 top-0 z-20 m-2 rounded-md bg-gray-700 p-1 text-white">
          R$ {price.toFixed(2)}
        </div>
      )}

      {/* <div
        className={` absolute z-30 flex h-full w-full flex-col items-center gap-2 rounded-xl bg-gray-600/50 p-4 py-12 text-center text-white opacity-0 duration-75 hover:opacity-100`}
      >
        <Link
          href={`/product/${productId}`}
          className="relative flex  w-full flex-col items-center justify-center rounded-lg bg-gray-700 p-2"
        >
          Abrir produto
        </Link>
        <button className="relative flex  w-full flex-col items-center justify-center rounded-lg bg-gray-700 p-2">
          Adicionar ao carrinho
        </button>
      </div> */}
      <div className=" m-8 h-[300px] w-[168px] rounded-xl duration-75 ">
        <Image
          src="/static/products/test/d1.jpg"
          alt={"test dress"}
          fill={true}
          className="rounded-xl object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 flex w-full flex-col">
          <div className="absolute z-30 mx-1 flex translate-y-5 items-end gap-1 px-2">
            {Array.from(availableSizes).map((element) => {
              return (
                <div
                  key={element}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-700 py-[1px] text-center text-white"
                >
                  {element}
                </div>
              );
            })}
          </div>
          <div className="h-12 w-full bg-gradient-to-t from-white to-transparent capitalize"></div>
          <div className="relative flex w-full  text-ellipsis  whitespace-nowrap rounded-b-xl bg-white ">
            <p className="over w-10/12 overflow-hidden text-ellipsis whitespace-nowrap p-3">
              {productName}
            </p>
            <div className="absolute bottom-0 right-0 z-40 ml-auto flex flex-col gap-1 p-3">
              <button className=" h-10 w-10 rounded-md bg-gray-700 hover:bg-gray-800"></button>
              <Link
                className="h-10 w-10 rounded-md bg-gray-700 hover:bg-gray-800"
                href={`/product/${productId}`}
              ></Link>
            </div>
          </div>
        </div>
      </div>

      <p className="py-2">{productName}</p>

      {/* 
      <div className="product-functionality mx-6 mb-6 flex flex-col gap-2  border-t pt-6  text-center">
        <button className=" rounded-xl bg-gray-800 p-2 text-white">
          Adicionar ao Carrinho
        </button>
      </div> */}
    </div>
  );
};

export const BrowserProductMiniComponent: React.FC<Product> = ({
  productId,
  price,
  priceSale,
  availableSizes,
  productName,
}) => {
  const [isHovering, setHover] = useState(false);

  const discountRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex w-fit cursor-default select-none flex-col items-center gap-2 rounded-xl bg-white shadow-[0_0_6px_2px_rgba(0,0,0,0.1)]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {priceSale !== undefined && priceSale < price ? (
        <div className="product-price absolute right-0 top-0 z-20 m-2 flex rounded-md bg-green-600 p-1 text-white">
          R$ {priceSale.toFixed(2)}
          <div className="mx-2 w-[1px] bg-white"></div>
          {Math.abs((priceSale / price - 1) * 100).toFixed(0)}%
          <div
            style={{
              width: !isHovering
                ? "0"
                : (() => {
                    if (!discountRef.current) return "0";

                    const width = `${discountRef.current.clientWidth}px`;
                    return width;
                  })(),
            }}
            className="overflow-hidden duration-75"
          >
            <div className="discount flex w-fit" ref={discountRef}>
              <p className="pl-1">desconto</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-price absolute right-0 top-0 z-20 m-2 rounded-md bg-gray-700 p-1 text-white">
          R$ {price.toFixed(2)}
        </div>
      )}
      <div className=" m-8 h-[190px] w-[100px] rounded-xl duration-75 ">
        <Image
          src="/static/products/test/d1.jpg"
          alt={"test dress"}
          fill={true}
          className="rounded-xl object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 flex w-full flex-col">
          <div className="absolute z-30 mx-1 flex translate-y-5 items-end gap-1">
            {Array.from(availableSizes).map((element) => {
              return (
                <div
                  key={element}
                  className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-700 py-[1px] text-center text-white"
                >
                  {element}
                </div>
              );
            })}
          </div>
          <div className="h-12 w-full bg-gradient-to-t from-white to-transparent capitalize"></div>
          <div className="relative flex w-full   rounded-b-xl  bg-white  ">
            <p className="w-9/12 overflow-hidden text-ellipsis whitespace-nowrap p-1">
              {productName}
            </p>
            <div className="absolute bottom-0 right-0 z-40 ml-auto flex flex-col gap-1 p-1">
              <button className=" h-8 w-8 rounded-md bg-gray-700 hover:bg-gray-800"></button>
              <Link
                className="h-8 w-8 rounded-md bg-gray-700 hover:bg-gray-800"
                href={`/product/${productId}`}
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrowserProductComponent;
