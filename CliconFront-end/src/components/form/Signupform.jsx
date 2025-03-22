import { useEffect, useState } from "react";
import Button from "../common/buttons/Button";
import Input from "../common/input/Input";
import { Link } from "react-router-dom";
import Errormsg from "../message/Errormsg";
import Successmsg from "../message/Successmsg";

export default function Signupform() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [loading, setIsloading] = useState(false);

  const closeMsg = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsloading(true);

    if (password !== cpassword) {
      setError("passwords do not match");
      console.log("passwords do not match");
      setIsloading(false);
      return;
    }

    if (!username) {
      setError("Username is required");
      setIsloading(false);
      return;
    }

    if (!email) {
      setError("email is required");
      setIsloading(false);
      return;
    }

    if (!password) {
      setError("password is required");
      setIsloading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // User created successfully
        console.log(data);
        setSuccess(data["message"]);
        setError(null);
        setIsloading(false);
      } else {
        // User already exists
        setError(data["error"]);
        console.log(data["error"]);
        setSuccess("");
      }
    } catch (error) {
      setError("Server error, please try again later.");
      setIsloading(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="container-auth">
        <>
          {/* error message */}
          {error && (
            <>
              <Errormsg error={error} closeMsg={closeMsg} />{" "}
            </>
          )}

          {/* success message */}
          {success && (
            <>
              <Successmsg success={success} />
            </>
          )}

          <form className="auth" onSubmit={handleSubmit}>
            <div className="form-floating mb-3 mt-3">
              <Input
                className="form-control- input-auth"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                id="input"
                required={true}
              />
              <label for="input" class="label">
                username
              </label>
              <div class="underline"></div>
            </div>

            <div className="form-floating mb-3 mt-3">
              <Input
                type="email"
                className="form-control- input-auth"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
              />
              <label for="email" class="label">
                email or phone
              </label>
              <div class="underline"></div>
            </div>

            <div className="form-floating mb-3 mt-3">
              <Input
                type="password"
                className="form-control- input-auth"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="password"
              />
              <label for="password" class="label">
                password
              </label>
              <div class="underline"></div>
            </div>

            <div className="form-floating mb-3 mt-3">
              <Input
                type="password"
                className="form-control- input-auth"
                value={cpassword}
                onChange={(event) => setCPassword(event.target.value)}
                id="cpassword"
              />
              <label for="cpassword" class="label">
                comfirm password
              </label>
              <div class="underline"></div>
            </div>

            <div className="submit-login">
              <Button
                loading={loading}
                setIsloading={setIsloading}
                text="Create Account"
                className="btn btn-submit-auth w-100 text-white"
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
