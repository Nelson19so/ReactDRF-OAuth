import { Link } from "react-router-dom";
import Mainsearchform from "../../../form/Mainsearchform";
import { useState } from "react";

export default function Navigationapp() {
  const [notifications, setNotifications] = useState(false);

  const handleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <>
      <nav className="nav-app pt-4 border-bottom shadow pb-3">
        <div className="container-nav container-fluid d-flex justify-content-between">
          <div className="logo-nav-app w-10">
            <Link to="/" className="d-flex justify-content-between">
              <h1 className="text-warning">O</h1>
              <h4 className="mt-2 text-white">clicon</h4>
            </Link>
          </div>

          <div className="search-bar">
            <Mainsearchform className="main-search-form" />
          </div>

          <div className="container-items-right d-flex justify-content-between">
            <Link
              to="#"
              onClick={() => handleNotifications()}
              className="text-white float-left mr-3 mt-2 
              d-flex justify-content-between link-notifications"
            >
              <h5>
                <i className="fa fa-user"></i>
              </h5>

              <span className="ml-1 p">Account</span>
              <i
                className={
                  notifications ? "fa fa-chevron-down" : "fa fa-chevron-up"
                }
              ></i>
            </Link>

            <Link className="text-white mt-2">
              <h5 className="float-left">
                <i className="fa fa-heart"></i>
              </h5>
              <span className="ml-1">Wish List</span>
            </Link>

            <Link className="text-white mt-2 ml-3">
              <h5 className="float-left">
                <i className="fa fa-shopping-cart"></i>
              </h5>
              <span className="ml-1 p">Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
