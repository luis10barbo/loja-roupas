import type { NextPage } from "next";
import { useRouter } from "next/router";
import ProductPage from "~/components/product/ProductPage";

const Product: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  if (productId === undefined) return <>Nenhum id de produto</>;
  if (Array.isArray(productId)) return <>id invalido</>;
  return (
    <>
      <ProductPage></ProductPage>
    </>
  );
};
export default Product;
