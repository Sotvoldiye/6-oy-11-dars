import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";
function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const email = fromData.get("email");
    const password = fromData.get("password");
    console.log(email, password);
  };
  return (
    <section>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <div className="overlay"></div>
          <form
            onSubmit={handleSubmit}
            action=""
            className="w-96 relative z-20 "
          >
            <h2 className="text-3xl text-center mb-5 font-bold text-white md:text-black">
              Login
            </h2>
            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Password:" name="password" type="password" />
            <div className="flex items-center gap-5 mt-8 mb-8">
              <button type="submit" className="btn btn-primary grow">
                Login
              </button>
              <button type="button" className="btn btn-secondary grow">
                Goole
              </button>
            </div>
            <p className="text-center opacity-75 text-white md:text-black">
              If you don't have account
              <Link className="link md:link-primary" to="/register">
                {" "}
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
