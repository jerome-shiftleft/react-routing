import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  const { productId } = params;

  return (
    <>
      <h1>Product Detail</h1>
      <span>Product ID: { productId }</span>
    </>
  );
}

export default ProductDetailPage;
