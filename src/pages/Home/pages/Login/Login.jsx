import React, { useEffect, useState } from "react";
import login_img from "../../../../assets/Home/login-img.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginDesarrollador } from "../../../../helpers/ApiUsuario";
import { RaceBy } from "@uiball/loaders";
import { AnimatePresence, motion } from 'framer-motion'
import { Toast } from "../../../../components/Alertas/Toast";


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
      } else {
        Toast.fire({
          icon: "error",
          title: "Datos incorrectos",
        })
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
                    to={"/registrar_empresa"}
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
                {/* <NavLink className="text-[#FA632B] hover:text-[#793AFF] transition-all duration-150 font-medium text-base absolute top-[21.3rem] right-4">
                    ¿Olvidaste la contraseña?
                </NavLink> */}
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
                </div>
                {/* <NavLink
                    to={"/login_empresa"}
                    className="text-[#3699FF] hover:text-[#0073E9] transition-all duration-150 font-normal text-sm"
                >
                    ¿Eres Empresa?
                </NavLink> */}
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
