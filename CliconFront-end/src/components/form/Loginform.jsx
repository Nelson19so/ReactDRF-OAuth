import { useState } from "react";
import Button from "../common/buttons/Button";
import Input from "../common/input/Input";
import { Link } from "react-router-dom";
import Errormsg from "../message/Errormsg";
import Successmsg from "../message/Successmsg";

export default function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [loading, setIsloading] = useState(false);

  const closeMsg = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsloading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data["message"]);
        console.log(data["message"]);
        setError("");
      } else {
        setError(data["error"]);
        console.log(data["error"]);
        setSuccess("");
      }
    } catch (error) {
      setError("Server error, please try again later.");
      setIsloading(false);
    }
  };

  return (
    <>
      <div className="container-auth">
        {/* error message */}
        {error && <Errormsg error={error} closeMsg={closeMsg} />}

        {/* success message */}
        {success && <Successmsg success={success} />}

        <form className="auth" onSubmit={handleSubmit}>
          <div className="form-floating mb-3 mt-3">
            <Input
              type="text"
              className="form-control- input-auth"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label for="username" className="label">
              username
            </label>
            <div className="underline"></div>
          </div>

          <div className="form-floating mb-3 mt-3">
            <Input
              type="password"
              className="form-control- input-auth"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label for="password" className="label">
              password
            </label>
            <div className="underline"></div>
          </div>

          <div className="container-forgot-password">
            <Link className="text-forgot-password">
              Forgotten your Password?
            </Link>
          </div>

          <div className="submit-login mt-3">
            <Button
              loading={loading}
              setIsloading={setIsloading}
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
      </div>
    </>
  );
}
