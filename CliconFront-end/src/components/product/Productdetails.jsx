import { Link } from "react-router-dom";
import items from "../../utils/apis/data.json";
import { useState } from "react";
import Randomproduct from "./Randomproduct";
import Randomproductdata from "../../utils/data/Randomproductdata";

function Productdetails() {
  const [amount, setAmount] = useState(0);

  const data = items;
  const itemId = data.find((item) => (item.name = "Item Name")).id;

  return (
    <>
      <div className="container-items">
        <div className="row grid">
          <div className="col-lg product-img mb-3 mr-4">
            {/*  */}
            <div
              className="ecommerce-gallery"
              data-mdb-ecommerce-gallery-init
              data-mdb-zoom-effect="true"
              data-mdb-auto-height="true"
            >
              <div className="row py-3 shadow-5">
                <div className="col-12 mb-1">
                  <div className="lightbox" data-mdb-lightbox-init>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                      alt="Gallery image 1"
                      className="ecommerce-gallery-main-img active w-100"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                </div>
                <div className="col-3 mt-1">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                    data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                    alt="Gallery image 1"
                    className="active w-100"
                  />
                </div>
                <div className="col-3 mt-1">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    alt="Gallery image 2"
                    className="w-100"
                  />
                </div>
                <div className="col-3 mt-1">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                    data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                    alt="Gallery image 3"
                    className="w-100"
                  />
                </div>
                <div className="col-3 mt-1">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                    data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                    alt="Gallery image 4"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            {/*  */}
          </div>

          <div className="col-lg product-details pt-5">
            <div className="container-rating w-100">
              <span className="float-left mr-3 stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <p className="float-left mr-1">
                5.9 Star Rating{" "}
                <span className="text-muted ml-2">(11,374 user Feedback)</span>
              </p>
              <span className="badge bg-warning">In Stock</span>
            </div>

            <h5 className="text-dark mt-4">
              Dell Optiplex 7000x7 480 All-in-One Computer Monitor
            </h5>
            <div className="w-100 d-flex justify-content-between mt-3 text-left -model">
              <div className="container-items">
                <p className="text-muted">
                  skull: <span className="text-dark">Ad123</span>
                </p>
                <p className="text-muted">
                  Brand: <span className="text-dark">DELL</span>
                </p>
              </div>
              <div className="container-items">
                <p className="text-muted">
                  Available: <span className="text-info">In stock</span>
                </p>
                <p className="text-muted">
                  Category: <span className="text-dark">Electronic Device</span>
                </p>
              </div>
            </div>

            <div className="mt-3 container-">
              <h2 className="text-info">
                $3848.00 <span className="text-muted">$44049.00</span>
              </h2>
            </div>

            <hr
              style={{ height: "1px", backgroundColor: "gray", width: "95%" }}
            />

            <div className="w-100 d-flex justify-content-between pr-4">
              <div className="container-item">
                <p>Color</p>
                <div className="container-form float-left mr-5 d-flex justify-content-between">
                  <input
                    type="radio"
                    name=""
                    id=""
                    className="float-left mr-2"
                  />
                  <p className="mt-3">White</p>
                </div>
                <div className="container-form float-left mr-5 d-flex justify-content-between">
                  <input
                    type="radio"
                    name=""
                    id=""
                    className="float-left mr-2"
                  />
                  <p className="mt-3">Black</p>
                </div>
                <div className="container-form float-left mr-5 d-flex justify-content-between">
                  <input
                    type="radio"
                    name=""
                    id=""
                    className="float-left mr-2"
                  />
                  <p className="mt-3">Silver</p>
                </div>
              </div>

              <div className="container-item">
                <p>Size</p>
                <select name="" id="" className="p-2 form-control w-100">
                  <option value="21 intches">21 intches long</option>
                  <option value="27 intches">21 intches long</option>
                  <option value="17 intches">21 intches long</option>
                </select>
              </div>
            </div>

            <div className="container-button w-100 mt-3">
              <div
                className="input-group float-left h-100"
                style={{ width: "110px" }}
              >
                <button
                  className="btn border"
                  onClick={() => setAmount(amount - 1)}
                >
                  <strong>-</strong>
                </button>
                <div className="bg-white border p-1 pl-3 pr-3">{amount}</div>
                <button
                  className="btn border"
                  onClick={() => setAmount(amount + 1)}
                >
                  <strong>+</strong>
                </button>
              </div>
              <button className="add-to-cart btn w-50 ml-1 mr-2 float-left">
                Add to Cart <i className="fa fa-shopping-cart ml-1"></i>
              </button>
              <button className="buy-item-wish btn">Buy Now</button>
            </div>

            <hr className="border shadow-lg" />

            <div className="container-bottom">
              <Link>
                <span className="float-left w-50">
                  <i className="fa fa-heart float-left mr-3 mt-1"></i>{" "}
                  <p className="text-muted">Add to Wish List</p>
                </span>
              </Link>

              <Link>
                <span>
                  {/* <i className="fa fa-heart float-left mr-3 mt-1"></i>{" "} */}
                  <p className="text-muted">Add to Compare</p>
                </span>
              </Link>
            </div>

            <div className="container-bottom border pt-2">
              <div className="container">
                <p className="text-muted">
                  100% Gurantee Safe Check Point & Refund under 24hrs
                </p>
                <div className="container border p-3">
                  <span className="text-warning" style={{ fontSize: "small" }}>
                    Home Delivery / pay before delivery / Safe product, verified
                    by Clicon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border w-100 pt-3 pb-3 header-product-root mt-5">
          <h5 className="text-dark">Relatated Brands</h5>
        </div> */}
        {/* <div className="container-brandssame">
          <Randomproductdata />
        </div> */}
      </div>
    </>
  );
}

export default Productdetails;
