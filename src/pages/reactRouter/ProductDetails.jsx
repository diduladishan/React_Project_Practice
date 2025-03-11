import { useParams } from "react-router-dom";
import products from "./data/ProductsPage";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const productsDetail = products.find((p) => p.id === id);

  if (!productsDetail) {
    return "❌ Product Not Found!";
  }

  return (
    <div>
      <p>{productsDetail.name}</p>

      <p>{productsDetail.price}</p>

      <p>{productsDetail.description}</p>
    </div>
  );
};

export default ProductDetails;
