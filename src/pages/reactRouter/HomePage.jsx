import { Link } from "react-router-dom";
import ProductPage from "./data/ProductsPage";

const HomePage = () => {
  console.log(ProductPage);
  return (
    <div>
      <ul>
        {ProductPage.map((p) => (
          <li key={p.id} className="mb-8">
            {p.name} <span>{`$${p.price}`}</span>
            <span className="bg-green-700 px-2 py-1.5 ml-3">
              <Link to={`/product/${p.id}`}>View Details</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
