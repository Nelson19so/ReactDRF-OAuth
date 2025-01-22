import { useState } from "react";
import Button from "../common/buttons/Button";
import Input from "../common/input/Input";
import { Link } from "react-router-dom";

export default function Signupform() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const closeMsg = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== cpassword) {
      setError("passwords do not match");
      console.log("passwords do not match");
      return;
    }

    if (!username) {
      setError("Username is required");
      return;
    }

    if (!email) {
      setError("email is required");
      return;
    }

    if (!password) {
      setError("password is required");
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
      } else {
        // User already exists
        setError(data["error"]);
        console.log(data["error"]);
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <>
      <div className="container-auth">
        <>
          {error && (
            <span className="badge bg-danger- text-danger center p-3 text-center msg-auth">
              {error}{" "}
              <button
                className="btn-close ml-5 float-right"
                onClick={closeMsg}
              ></button>
            </span>
          )}

          {success && (
            <span className="badge bg-success- center p-3 text-center msg-auth">
              {success}
            </span>
          )}

          {/* {error.data && <p>{error.data}</p>} */}

          <form
            action=""
            // method="Post"
            className="auth"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3 mt-3">
              <Input
                // placeholder="Username"
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
