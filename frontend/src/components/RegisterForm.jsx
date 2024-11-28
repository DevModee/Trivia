import { useState } from "react"
import InputText from "./InputText"

const RegisterForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    repeatPassword: ""
  })


  return (
    <div className="flex flex-1 flex-col w-[20%] bg-zinc-900 rounded-xl p-4 justify-center">
      <InputText text={"Username"} placeholder={"User"} type={"text"} onChangeInput={(value) => setValues((prevValues) => ({ ...prevValues, username: value }))} />
      <InputText text={"Password"} placeholder={"******"} type={"password"} onChangeInput={(value) => setValues((prevValues) => ({ ...prevValues, password: value }))} />
      <InputText text={"Repeat your password"} placeholder={"******"} type={"password"} onChangeInput={(value) => setValues((prevValues) => ({ ...prevValues, repeatPassword: value }))} />

      <button className="bg-blue-700 mt-4 rounded-md w-[40%] py-2 hover:bg-blue-600">Register</button>
    </div>
  )
}

export default RegisterForm