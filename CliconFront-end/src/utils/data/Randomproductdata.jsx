import { Link } from "react-router-dom";
import Randomproduct from "../../components/product/Randomproduct";
import items from "../apis/data.json";
import { useState } from "react";

export default function Randomproductdata() {
  // const [items, setItems] = useState([]);
  // const [error, setError] = useState(null);

  // fetch(items)
  //   .then((response) => response.json())
  //   .then((data) => setItems(data))
  //   .catch((error) => setError(error));
  return (
    <>
      {items.length ? (
        <>
          {items.map((item) => (
            <Link to={`/dashboard/product/${item.id}`}>
              <Randomproduct
                key={item.id}
                name={item.name}
                price={item.price}
                withbutton={item.withbutton}
              />
            </Link>
          ))}
        </>
      ) : (
        <div className="error">No data</div>
      )}

      {/* load error message */}
      {/* {error && (
        <>
          <p>{error.message}</p>
        </>
      )} */}
    </>
  );
}
