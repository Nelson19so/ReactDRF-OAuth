import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Smallscrnavigation({ navchange }) {
  const Navbar = useRef(null);
  const [showitems, setShowitems] = useState(false);
  const [FixedNavbar, setFixedNavbar] = useState(false);

  const scrolltop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function handleshowitems() {
    setShowitems(!showitems);
  }

  useEffect(() => {
    if (navchange) {
      window.onscroll = () => {
        if (
          document.body.scrollTop > 90 ||
          document.documentElement.scrollTop < 90
        ) {
          setFixedNavbar(false);
        } else {
          setFixedNavbar(true);
        }
      };
    } else {
      setFixedNavbar(true);
    }
  }, []);

  return (
    <>
      <nav
        className={
          FixedNavbar
            ? "blog_Nav pb-3 pt- sm-screen-nav"
            : "navbar-expand pt-5 pb-5 sm-screen-nav"
        }
        ref={Navbar}
      >
        {FixedNavbar && (
          <>
            <div className="container-top-items w-100 mb-2 pt-2">
              <center>
                <p className="text-muted">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!{" "}
                  <Link to="/dasboard" className="text-white ml-2">
                    Shop Now
                  </Link>
                </p>
              </center>
            </div>
          </>
        )}

        <div className="container row mt-3">
          <div className="logo col-lg d-flex justify-content-between w-100">
            <strong>
              <h3>Clicon</h3>
            </strong>
            <button className="btn" onClick={handleshowitems}>
              <i className="fa fa-bars"></i>
            </button>
          </div>

          {showitems && (
            <>
              <div className="link col-lg">
                <div className="container-">
                  <ul>
                    <li className="mb-3 w-100">
                      <Link to="/" onClick={scrolltop}>
                        Home
                      </Link>
                    </li>
                    <li className="mb-3 w-100">
                      <Link onClick={scrolltop}>About</Link>
                    </li>
                    <li className="mb-3 w-100">
                      <Link onClick={scrolltop}>Contact</Link>
                    </li>
                    <li className="mb-3 w-100">
                      <Link to="/signup" onClick={scrolltop}>
                        Signup
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg search">
                <div className="w-100">
                  <input
                    type="email"
                    placeholder="What are you looking for?"
                    className="form-control search-navbar-btn float-right"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
