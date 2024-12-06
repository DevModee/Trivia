import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "./InputText";
import { adminLogin } from "../api/AdminApi";

const LoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  })

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const response = await adminLogin(values.username, values.password);
      if (response.status === 200) {
        console.log("response: ", response);
        navigate("/admin-panel");
      }

    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Unexpected error")
    }
  };

  return (
    <div className="flex flex-1 flex-col w-[20%] bg-zinc-900 rounded-x1 p-4 justify-center">
      <h2 className="text-white text-center mb-4">Admin Login</h2>
      {errorMessage && (
        <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
      )}
      <InputText
        text={"Username"}
        placeholder={"User"}
        type={"text"}
        onChangeInput={(value) =>
          setValues((prevValues) => ({ ...prevValues, username: value }))
        }
      />
      <InputText
        text={"Password"}
        placeholder={"******"}
        type={"password"}
        onChangeInput={(value) =>
          setValues((prevValues) => ({ ...prevValues, password: value }))
        }
      />
      <button
        className="bg-blue-700 mt-4 rounded-md w-[40%] py-2 hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
};

export default LoginForm