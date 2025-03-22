import Footer from "../../components/common/footer/Footer";
import Loginform from "../../components/form/Loginform";

import SignupImg from "../../../images/AuthAndother.jpg";

import Navigation from "../../components/common/Navigation/blog/Navigation";
import Smallscrnavigation from "../../components/common/Navigation/blog/Smallscrnavigation";

function Login() {
  return (
    <>
      <div className="container-login">
        <Navigation navchange={false} />
        <Smallscrnavigation navchange={false} />

        <div className="container-items row">
          {/* Form img */}
          <div className="col-md grid-inner">
            <img src={SignupImg} alt="Basket-signup" />
            <div className="backdrop" />
          </div>

          {/* Form */}
          <div className="col-md grid-inner-2 pt-5 mt-3">
            <div className="container">
              <div className="header- mb-4">
                <strong>
                  <h1 className="text-dark">Log in to Exclusive</h1>
                </strong>
                <p className="text-muted">Enter your details below</p>
              </div>
              <Loginform />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="footer mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Login;
