import Button from "../common/buttons/Button";
import Input from "../common/input/Input";
import { Link } from "react-router-dom";

export default function Loginform() {
  return (
    <>
      <div className="container-auth">
        <>
          <form action="" method="Post" className="auth">
            <div className="form-floating mb-3 mt-3">
              <Input
                type="text"
                placeholder="Email or Phone"
                className="form-control- input-auth"
              />
            </div>

            <div className="form-floating mb-3 mt-3">
              <Input
                type="password"
                placeholder="Password"
                className="form-control- input-auth"
              />
            </div>

            <div className="submit-login d-flex justify-content-between">
              <Button
                text="Create Account"
                className="btn btn-submit-auth w-30 text-white pl-3 pr-3"
              />
              <Link className="text-forgot-password">Forgot Password</Link>
            </div>
          </form>
        </>
      </div>
    </>
  );
}
