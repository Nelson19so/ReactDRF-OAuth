import { useState } from "react";
import Button from "../common/buttons/Button";
import Input from "../common/input/Input";
import { Link } from "react-router-dom";

export default function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container-auth">
        <>
          <form action="" method="Post" className="auth">
            <div className="form-floating mb-3 mt-3">
              <Input
                type="text"
                className="form-control- input-auth"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <label for="username" class="label">
                username
              </label>
              <div class="underline"></div>
            </div>

            <div className="form-floating mb-3 mt-3">
              <Input
                type="password"
                className="form-control- input-auth"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label for="password" class="label">
                password
              </label>
              <div class="underline"></div>
            </div>

            <div className="container-forgot-password">
              <Link className="text-forgot-password">
                Forgotten your Password?
              </Link>
            </div>

            <div className="submit-login mt-3">
              <Button
                text="Log into Account"
                className="btn btn-submit-auth w-100 text-white pl-3 pr-3"
              />
            </div>

            <Link className="text-dark">
              <div className="container-google-auth w-100 mt-3">
                <p className="text-center">
                  <i className="fa fa-google mt-1 mr-2"></i>Signup with Google
                </p>
              </div>
            </Link>

            <p className="text-muted text-center mt-4">
              Want a new Clicon Account?{" "}
              <strong>
                <Link to="/signup" className="text-muted auth-link">
                  Create Account
                </Link>
              </strong>
            </p>
          </form>
        </>
      </div>
    </>
  );
}
