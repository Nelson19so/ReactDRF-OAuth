import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navigation({ navchange }) {
  const Navbar = useRef(null);
  const [FixedNavbar, setFixedNavbar] = useState(false);

  const scrolltop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            ? "blog_Nav pb-1 pt- lg-screen-nav fixed"
            : "navbar-expand pt-5 pb-5 lg-screen-nav"
        }
        ref={Navbar}
      >
        {FixedNavbar && (
          <>
            <div className="container-top-items w-100 mb-2 pt-2">
              <center>
                <p className="text-muted">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%! <Link className="text-white ml-2">Shop Now</Link>
                </p>
              </center>
            </div>
          </>
        )}

        <div className="container row mt-3">
          <div className="logo col-md-2">
            <strong>
              <h3>Clicon</h3>
            </strong>
          </div>

          <div className="link col-md-6">
            <div className="container">
              <ul className="d-flex justify-content-evenly">
                <li className="float-left">
                  <Link to="/" onClick={scrolltop}>
                    Home
                  </Link>
                </li>
                <li className="float-left">
                  <a href="#about" onClick={scrolltop}>
                    About
                  </a>
                </li>
                <li className="float-left">
                  <a href="#contact" onClick={scrolltop}>
                    Contact
                  </a>
                </li>
                <li className="float-left">
                  <Link to="/signup" onClick={scrolltop}>
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 search">
            <div className="w-100">
              <input
                type="email"
                placeholder="What are you looking for?"
                className="form-control search-navbar-btn float-right"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
