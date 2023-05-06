import React from 'react'

const FormDesarrollador = () => {
  return (
    <>
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
    </>
  )
}

export default FormDesarrollador
