import { useState } from "react"
import axios from "axios";
import InputText from "./InputText"

const LoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  })

  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    try {
      const apiUrl = process.env.REACT_APP_ADMIN_API_URL;

      const reponse = await axios.post(`${apiUrl}/admin`, {
        username: values.username,
        password: values.password,
      });

      console.log("Login successfully:", reponse.data);

      localStorage.setItem("adminToken", reponse.data.token);

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