import Button from "../common/buttons/Button";
import Input from "../common/input/Input";
import { Link } from "react-router-dom";

export default function Signupform() {
  return (
    <>
      <div className="container-auth">
        <>
          <form action="" method="Post" className="auth">
            <div className="form-floating mb-3 mt-3">
              <Input
                placeholder="Username"
                className="form-control- input-auth"
              />
            </div>

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

            <div className="submit-login">
              <Button
                text="Create Account"
                className="btn btn-submit-auth w-100 text-white"
              />
            </div>

            <Link className="text-dark">
              <div className="container-google-auth w-100 mt-3">
                <p className="text-center">Signup with Google</p>
              </div>
            </Link>

            <p className="text-muted text-center mt-4">
              Already have an account?{" "}
              <strong>
                <Link to="/login" className="text-muted auth-link">
                  Login
                </Link>
              </strong>
            </p>
          </form>
        </>
      </div>
    </>
  );
}
