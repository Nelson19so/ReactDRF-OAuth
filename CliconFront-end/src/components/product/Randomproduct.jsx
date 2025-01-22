import { Link } from "react-router-dom";
import imgcard from "../../../images/dress-shop-97261.jpg";
import Addtocart from "../form/Addtocart";

export default function Randomproduct({ name, price, withbutton }) {
  return (
    <>
      <center>
        <div className="card float-left mr-1 mb-3 text-left p-0 center">
          <img src={imgcard} alt="" className="card-img-top" />
          <div className="card-body">
            <div className="container-name">
              <span className="card-title text-muted">{name}</span>
            </div>

            <p
              className="card-text text-info float-left mr-3 mt-1"
              style={{ height: "5px" }}
            >
              {price}
            </p>

            <span
              className="text-muted discount mt-1"
              style={{ height: "5px" }}
            >
              $1200
            </span>

            {withbutton && (
              <div className="container-items d-flex justify-content-between p-0 mt-2">
                <Addtocart />
              </div>
            )}
          </div>
        </div>
      </center>
    </>
  );
}
