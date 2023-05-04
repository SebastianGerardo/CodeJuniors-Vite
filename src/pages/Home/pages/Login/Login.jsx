import React, { useEffect, useState } from "react";
import login_img from "../../../../assets/Home/login-img.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginDesarrollador } from "../../../../helpers/ApiUsuario";
import { RaceBy } from "@uiball/loaders";
import { AnimatePresence, motion } from 'framer-motion'


const Login = () => {
  
  const [infoForm, setInfoForm] = useState({
    tipo: "desarrollador",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInfoForm({
      ...infoForm,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginDesarrollador(infoForm).then((res) => {
      if (res.status == 200) {
        localStorage.setItem("token", res.token);
        navigate("/developer", { replace: true, state: { logged: true } });
      }
    });
  };

  return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.3 }}
            className="w-screen h-screen grid grid-cols-1 lg:grid-cols-[30%_70%]">
            <div className="hidden lg:grid  grid-rows-[30%_70%] text-center text-white bg-[#1E3A8A]">
                <div className="flex flex-col justify-center items-center max-w-[25rem] mx-auto">
                <h1 className="text-3xl font-bold">CodeJuniors</h1>
                <h1 className="text-lg">
                    Descubre todas las oportunidades laborales disponibles para ti
                </h1>
                </div>
                <div className="flex items-end mx-auto max-w-[25rem]">
                <img src={login_img} alt="" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <form
                action=""
                onSubmit={(e) => handleSubmit(e)}
                className="relative px-4 py-12 flex flex-col items-start gap-4 w-max"
                >
                <h1 className="text-2xl font-medium">
                    Bienvenid@ Desarrollador!
                </h1>
                <h2 className="flex gap-1 text-lg">
                    ¿Eres nuevo?
                    <NavLink
                    to={"/register"}
                    className="text-[#FA632B] hover:text-[#FA632BD9] transition-all duration-150 font-medium"
                    >
                    Registrate Aquí
                    </NavLink>
                    o
                    <NavLink
                    to={"/"}
                    className="text-[#06b6d4] hover:text-[#793AFF] transition-all duration-150 font-medium"
                    >
                    Vuelve al Inicio
                    </NavLink>
                </h2>
                <label className="w-full">
                    <span className="pl-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700">
                    Tipo de usuario
                    </span>
                    <select
                    defaultValue="desarrollador"
                    name="tipo"
                    onChange={handleInputChange}
                    className="block w-full h-14 rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
                    >
                    <option value="desarrollador">Desarrollador</option>
                    <option value="empresa">Empresa</option>
                    </select>
                </label>
                <InputDefault
                    onChange={handleInputChange}
                    label="Email"
                    type="email"
                    name="email"
                />
                <NavLink className="text-[#FA632B] hover:text-[#793AFF] transition-all duration-150 font-medium text-base absolute top-[21.3rem] right-4">
                    ¿Olvidaste la contraseña?
                </NavLink>
                <InputDefault
                    onChange={handleInputChange}
                    label="Password"
                    type="password"
                    name="password"
                />
                <div className="flex items-center gap-2">
                    <button
                    className={`bg-[#FA632BD9] hover:bg-[#FA632B] transition-all duration-150 text-white font-medium py-2 px-4 rounded h-12`}
                    >
                    Ingresar
                    </button>
                    <div
                    className="flex gap-2 items-center cursor-pointer bg-[#E1F0FF] text-[#3699FF] hover:bg-[#3699FF] hover:text-white h-12 transition-all duration-150 font-medium py-2 px-4 rounded"
                    >
                    <GoogleIcon />
                    Ingresa con Google
                    </div>
                </div>
                <NavLink
                    to={"/login_empresa"}
                    className="text-[#3699FF] hover:text-[#0073E9] transition-all duration-150 font-normal text-sm"
                >
                    ¿Eres Empresa?
                </NavLink>
                </form>
            </div>
            </motion.div>
        </AnimatePresence>
     
  );
};

export default Login;

export const InputDefault = ({
  label,
  type = "text",
  name,
  placeholder,
  onChange,
}) => {
  return (
    <label className="w-full">
      <span className="pl-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700">
        {label}
      </span>
      <input
        type={type}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        className="block w-full h-14 rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
      />
    </label>
  );
};

const GoogleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
        fill="#4285F4"
      ></path>
      <path
        d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
        fill="#34A853"
      ></path>
      <path
        d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
        fill="#FBBC05"
      ></path>
      <path
        d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
        fill="#EB4335"
      ></path>
    </svg>
  );
};
