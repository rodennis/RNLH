import { useState } from "react";
import { signIn } from "../../services/users";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";
import Layout from "../../components/Layout/Layout";

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
    <Layout className="layout-signin" user={props.user}>
      <div className="signin-container">
        <div className="signin-helper">
          <h3 className="helper-main-signin">Sign in to your account.</h3>
          <h4 className="helper-signin-subheader">
            Don't have an account?
            <br />
            <br />
            <Link
              to="/sign-up"
              style={{ textDecoration: "none", color: "#006d77" }}
            >
              Sign up
            </Link>{" "}
          </h4>
        </div>
        <div>
          <div className="header-signin">
            <h3 className="signin">Sign In</h3>
          </div>

          <form className="signin-form" onSubmit={onSignIn}>
            <div className="container">
              <label className="signin-label">Email: </label>
              <div className="signin-email">
                <input
                  required
                  className="signin-input"
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>

              <label className="signin-label">Password: </label>
              <div className="signin-pw">
                <input
                  required
                  className="signin-input"
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
    </Layout>
  );
}

export default SignIn;
