import { Link } from "react-router-dom";
import Newsletterform from "../../form/Newsletterform";

export default function Footer() {
  return (
    <>
      <div className="container-footer">
        <div className="container--">
          <div className="top-container pt-5 pb-5">
            <center>
              <h3 className="text-white">Subscribe to our Newsletter</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="form">
                <Newsletterform />

                <div
                  style={{
                    backgroundColor: "gray",
                    height: "0.5px",
                    width: "30%",
                  }}
                />
              </div>
            </center>
          </div>

          <div className="center-container p-5">
            <div className="row grid-newsletter">
              <div className="col-lg grid-inner-item">
                <ul className="mt-3">
                  <li>
                    <h1 className="text-white">
                      <strong className="text-warning">O</strong>CLICON
                    </h1>
                  </li>
                  <li>
                    <p>
                      <Link className="text-muted">Customer Support</Link>
                    </p>
                    <p>
                      <Link className="text-white">+11 235 334 74</Link>
                    </p>
                  </li>
                  <li>
                    <strong>
                      <p>
                        <Link className="text-muted">344 Washington ave.</Link>
                      </p>
                    </strong>
                  </li>
                  <li>
                    <p>
                      <Link className="text-muted">
                        manchester Kentucky 233
                      </Link>
                    </p>
                    <strong>
                      <p>
                        <Link className="text-white">
                          cliconShoping@gmail.com
                        </Link>
                      </p>
                    </strong>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 grid-inner-item">
                <ul className="mt-3">
                  <strong>
                    <p className="text-white">Top categories</p>
                  </strong>
                  <li>
                    <Link>
                      <p className="text-muted">Computers & Laptops</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Smartphone</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Headphone</p>
                    </Link>
                  </li>
                  <p className="text-white">
                    <span className="text-warning">---</span> Accessories
                  </p>
                  <li>
                    <Link>
                      <p className="text-muted">Camera & Photo</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Tvs & Home</p>
                    </Link>
                  </li>
                  <Link>
                    <p className="text-warning">
                      Browse All Product <i className="fa fa-arrow-right"></i>
                    </p>
                  </Link>
                </ul>
              </div>

              <div className="col-lg-2 grid-inner-item">
                <ul className="mt-3">
                  <li>
                    <strong>
                      <p className="text-white">Quick Links</p>
                    </strong>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Shop product</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Shopping Cart</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Wishlist</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Shopping Cart</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Track orders</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">Customer Help</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="text-muted">About us</p>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 grid-inner-item">
                <strong>
                  <p className="text-white">Download app</p>
                </strong>
                <Link>
                  <div className="bg-muted pt-2 pb-1 pr-2 pl-2 mb-3 text-white download--link">
                    <p>
                      Get it now
                      <p>
                        <strong>Google Play</strong>
                      </p>
                    </p>
                  </div>
                </Link>

                <Link>
                  <div className="bg-muted pt-2 pb-1 pr-2 pl-2 mb-3 text-white download--link">
                    <p>
                      Get it now{" "}
                      <p>
                        <strong>App Store</strong>
                      </p>
                    </p>
                    <strong></strong>
                  </div>
                </Link>
              </div>

              <div className="col-lg grid-inner-item">
                <strong>
                  <p className="text-white">Popular tags</p>
                </strong>

                <Link>
                  <p className="p-tags p-2 border w-3">Game</p>
                </Link>
                <Link>
                  <p className="p-tags p-2 border w-3">Iphone</p>
                </Link>
                <Link>
                  <p className="p-tags p-2 border w-3">Tvs</p>
                </Link>
                <Link>
                  <p className="p-tags p-2 border w-3">Speaker</p>
                </Link>
                <Link>
                  <p className="p-tags p-2 border w-3">Asus Laptop</p>
                </Link>
                <Link>
                  <p className="p-tags p-2 border w-3">Powerbank</p>
                </Link>
                <Link>
                  <p className="p-tags p-2 border w-3">Smart TV</p>
                </Link>
                <Link>
                  <p className="p-tags p-2 border w-3">Samsung</p>
                </Link>
                <Link>
                  <p className="p-tags p-2 border w-3">Microwave</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="bottom-container pt-3 pb-3">
            <center>
              <p className="text-muted last-item">
                Clicon ecommerce website{" "}
                <span className="text-white">@copyright reserved 2025</span>{" "}
                designed by{" "}
                <Link
                  to="https://github.com/Nelson19so"
                  className="text-info"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Nelson
                </Link>
              </p>
            </center>
          </div>

          {/* <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content"> */}
          {/* Modal Header */}
          {/* <div className="modal-header"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
