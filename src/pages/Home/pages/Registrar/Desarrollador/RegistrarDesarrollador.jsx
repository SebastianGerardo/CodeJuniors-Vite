import React, { useEffect, useState } from "react";
import login_img from "../../../../../assets/Home/login-img.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { registrarDesarrollador} from "../../../../../helpers/ApiUsuario";
import { RaceBy } from "@uiball/loaders";
import { AnimatePresence, motion } from 'framer-motion'
import FormDesarrollador from "./components/FormDesarrollador";
import { Toast } from "../../../../../components/Alertas/Toast";

const RegistrarDesarrollador = () => {
  
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const [infoForm, setInfoForm] = useState({
    desarrollador_nombre: "",
    desarrollador_apellido: "",
    desarrollador_cargo: "",
    desarrollador_email: "",
    desarrollador_password: "",
    desarrollador_descripcion: "",
    desarrollador_telefono: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.name == "desarrollador_telefono" ? Number(e.target.value) : e.target.value;
    setInfoForm({
      ...infoForm,
      [e.target.name]: value,
    });
  };
  const navigate = useNavigate();

  const isEmptyObject = obj => {
    return Object.values(obj).some(value => value === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmptyObject(infoForm)) {
      registrarDesarrollador(infoForm).then((res) => {
        if(res.status == true) {
          navigate("/login");
        } else {
          Toast.fire({
            icon: 'error',
            title: "Ocurrió un error al registrar el desarrollador ):"
          })
        }
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos'
      })
    }
  };


  const sectionStep = {
    0: <FormDesarrollador infoForm={infoForm} handleInputChange={handleInputChange} />,
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
                className="px-4 py-12 pb-2 w-[50%]"
                >
                  <h1 className="text-2xl font-medium">Bienvenid@ Desarrollador!</h1>
                  <h2 className="flex gap-1 text-lg w-full mt-2  text-gray-400/60 font-medium">
                  Únete a la comunidad de desarrolladores junior más grande del mundo y conecta con empresas en busca de talentos emergentes en programación con Codejuniors.
                  </h2>
                  <div className="w-full mt-8">
                      {sectionStep[currentStep]} 
                  </div>
                </form>
                  <div className={`flex  items-center gap-2 mt-2 w-[50%] ${currentStep !== 0 ? "justify-between " : " justify-end"} `}>
                      <button
                      onClick={handleSubmit}
                      className={`bg-[#FA632BD9] hover:bg-[#FA632B] transition-all duration-150 text-white font-medium py-2 px-4 rounded h-12 mr-4`}
                      >
                        Enviar
                      </button>
                  </div>
                  <NavLink
                      to={"/registrar_empresa"}
                      className="text-[#3699FF] hover:text-[#0073E9] transition-all duration-150 font-normal text-sm"
                  >
                      ¿Eres Empresa?
                  </NavLink> 
            </div>
            </motion.div>
        </AnimatePresence>
     
  );
};

export default RegistrarDesarrollador;
