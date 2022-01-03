import { useState } from "react";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <div className="button">
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </div>
      );
    }
  };

  const { email, password } = form;

  return (
    <div className="signin-container">
      <div>
        <div className="header-signin">
          <h3>Sign In</h3>
        </div>

        <form onSubmit={onSignIn}>
          <div className="container">
            <label>Email: </label>
            <div className="signin-email">
              <input
                required
                type="text"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>

            <label>Password: </label>
            <div className="signin-pw">
              <input
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          {renderError()}
        </form>
      </div>
    </div>
  );
}

export default SignIn;
