import Navigation from "../../components/common/Navigation/blog/Navigation";

import SignupImg from "../../../images/AuthAndother.jpg";

import Footer from "../../components/common/footer/Footer";
import Signupform from "../../components/form/Signupform";
import Smallscrnavigation from "../../components/common/Navigation/blog/Smallscrnavigation";

function Signup() {
  return (
    <>
      <div className="container-sign-up">
        <Navigation navchange={false} />
        <Smallscrnavigation navchange={false} />

        <div className="container-items row">
          {/* Form img */}
          <div className="col-md grid-inner">
            <img src={SignupImg} alt="Basket-signup" />
            <div className="backdrop" />
          </div>

          {/* Form */}
          <div className="col-md grid-inner-2">
            <div className="container pt-5">
              <div className="header- mb-4">
                <strong>
                  <h1 className="text-dark">Create an account</h1>
                </strong>
                <p className="text-muted">Enter your details below</p>
              </div>
              <Signupform />
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

export default Signup;
