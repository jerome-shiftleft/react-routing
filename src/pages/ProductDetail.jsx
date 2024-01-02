import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  const { productId } = params;

  return (
    <>
      <h1>Product Detail</h1>
      <span>Product ID: { productId }</span>
      <p>
        <Link to=".." relative="path">Back to Products List</Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
