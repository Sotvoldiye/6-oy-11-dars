import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useRegister } from "../hooks/useRegister";

function Register() {
const {data, isPending, register} = useRegister()
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const displayName = fromData.get("displayName");
    const email = fromData.get("email");
    const password = fromData.get("password");
    register( displayName, email, password);
  };
  return (
    <section>
      <div className="h-screen grid  grid-cols-1 md:grid-cols-2">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <div className="overlay"></div>

          <form
            action=""
            onSubmit={handleSubmit}
            className="w-96 relative z-20"
          >
            <h2 className="text-3xl text-center mb-5 font-bold text-white md:text-black">
              Register
            </h2>
            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Dispay Name:" name="displayName" type="text" />
            <FormInput label="Password:" name="password" type="password" />
            <div className="flex items-center gap-5 mt-8 mb-8">
              <button type="submit" className="btn btn-primary grow">
                Register
              </button>
              <button type="button" className="btn btn-secondary grow">
                Google
              </button>
            </div>
            <p className="text-center opacity-75 text-white md:text-black">
              If you have account
              <Link className="link md:link-primary " to="/login">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
