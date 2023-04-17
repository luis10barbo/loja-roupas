import { useEffect, useRef, useState } from "react";
import { BrowserProductMiniComponent } from "./BrowserProductComponent";
import { ProductFilters } from "~/types/productTypes";
import { updateFromObjectState } from "~/utils/object/objectUtils";

const MiniBrowserComponent: React.FC<{
  filterBar?: boolean;
  maxItems?: number;
}> = ({ filterBar = true, maxItems = 50 }) => {
  const [isSticky, setSticky] = useState(false);
  const [filters, setFilters] = useState<ProductFilters>({
    maxPrice: null,
    minPrice: 0,
    sorting: "relevance",
  });

  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!filtersRef.current) return;
    const filtersDiv = filtersRef.current;

    const observer = new IntersectionObserver(([e]) => setSticky(true), {
      threshold: [1],
    });

    observer.observe(filtersDiv);

    return () => {
      observer.unobserve(filtersDiv);
    };
  }, []);

  return (
    <>
      {filterBar && (
        <div
          ref={filtersRef}
          className="sticky top-2 z-30 flex flex-wrap items-center justify-center gap-4 rounded-xl bg-white p-2 drop-shadow-lg"
        >
          <div className="flex items-center gap-2">
            de R$
            <input
              type="text"
              className="w-20 border-b bg-transparent px-2 py-1 outline-none duration-75  focus:border-black/30 "
              placeholder="mínimo"
              value={filters.minPrice}
              onChange={(e) => {
                updateFromObjectState(
                  setFilters,
                  "minPrice",
                  Number.parseFloat(
                    e.target.value.length > 0 ? e.target.value : "0"
                  )
                );
              }}
            />
            até R$
            <input
              type="text"
              className="w-20 border-b bg-transparent px-2 py-1 outline-none duration-75 focus:border-black/30 "
              placeholder="máximo"
              value={filters.maxPrice !== null ? filters.maxPrice : "∞"}
              onChange={(e) => {
                updateFromObjectState(
                  setFilters,
                  "maxPrice",
                  Number.parseFloat(
                    e.target.value.length > 0
                      ? e.target.value.replace("∞", "")
                      : "0"
                  )
                );
              }}
            />
          </div>

          {/* <div className="h-[20px] w-[1px] bg-gray-300"></div> */}
          <select
            name=""
            id=""
            className="rounded-xl border bg-transparent p-2"
          >
            <option value={"relevance" as ProductFilters["sorting"]}>
              Mais Relevante
            </option>
            <option value={"newest" as ProductFilters["sorting"]}>
              Mais Novo
            </option>
            <option value={"highestPrice" as ProductFilters["sorting"]}>
              Maior Promoção
            </option>
            <option value={"lowestPrice" as ProductFilters["sorting"]}>
              Mais Barato
            </option>
            <option value={"bestSale" as ProductFilters["sorting"]}>
              Mais Caro
            </option>
          </select>
        </div>
      )}

      <div className="grid  grid-cols-[repeat(auto-fit,minmax(164px,164px))] justify-center gap-2">
        {[...Array(maxItems).keys()].map((element, index) => {
          return (
            <BrowserProductMiniComponent
              key={index}
              productName="vestido rosa 2"
              productId={"b"}
              price={1500}
              availableSizes={new Set(["M", "G", "P"])}
            />
          );
        })}
      </div>
    </>
  );
};
export default MiniBrowserComponent;
