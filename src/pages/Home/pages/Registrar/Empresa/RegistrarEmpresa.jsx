import React, { useEffect, useState } from "react";
import login_img from "../../../../../assets/Home/login-img.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginDesarrollador, registrarEmpresa } from "../../../../../helpers/ApiUsuario";
import { RaceBy } from "@uiball/loaders";
import { AnimatePresence, motion } from 'framer-motion'
import FormEmpresa from "./components/Empresa/FormEmpresa";
import FormEmpresa2 from "./components/Empresa/FormEmpresa2";
import StepProgressBar from "../../../../../components/ProgressStatus/StepProgressBar";
import { Toast } from "../../../../../components/Alertas/Toast";

const RegistrarEmpresa = () => {
  
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const [infoForm, setInfoForm] = useState({
    empresa_nombre: "",
    empresa_encargado: "",
    empresa_ruc: "",
    empresa_email: "",
    empresa_password: "",
    empresa_razon_social: "",

    empresa_telefono: "", //NUMERO!!!
    empresa_descripcion: "",
    empresa_sector: "",
    empresa_ubicacion: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.name == "empresa_telefono" ? Number(e.target.value) : e.target.value;
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
      registrarEmpresa(infoForm).then((res) => {
        console.log(res);
        if(res.status == true) {
          console.log("Empresa registrada correctamente");
          navigate("/login");
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
    0: <FormEmpresa infoForm={infoForm} handleInputChange={handleInputChange} />,
    1: <FormEmpresa2 infoForm={infoForm} handleInputChange={handleInputChange} />,       //----> Aqui van los componentes que se van a ir mostrando
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
                  <h1 className="text-2xl font-medium">Bienvenid@!</h1>
                  <h2 className="flex gap-1 text-lg w-full italic text-gray-400/60 mt-2">
                    Únete a Codejuniors y descubre talentos emergentes en programación para tu empresa. Con nuestra plataforma, encontrarás el desarrollador junior perfecto para impulsar tu negocio hacia el éxito
                  </h2>
                  <div className="w-full">
                    <StepProgressBar steps={2} currentStep={currentStep} /> 
                  </div>
                  <div className="w-full">
                      {sectionStep[currentStep]} 
                  </div>
                </form>
                  <div className={`flex  items-center gap-2 mt-2 w-[50%] ${currentStep !== 0 ? "justify-between " : " justify-end"} `}>
                      {
                        currentStep !== 0 && (
                          <button
                          onClick={currentStep !== 0 ? handlePrevStep : ""}
                          className={`bg-[#FA632BD9] hover:bg-[#FA632B] transition-all duration-150 text-white font-medium py-2 px-4 rounded h-12 ml-4`}
                          >
                          Volver
                          </button>
                        )
                      }
                      <button
                      onClick={currentStep !== 1 ? handleNextStep : handleSubmit}
                      className={`bg-[#FA632BD9] hover:bg-[#FA632B] transition-all duration-150 text-white font-medium py-2 px-4 rounded h-12 mr-4`}
                      >
                      {currentStep !== 1 ? "Siguiente" : "Enviar"}
                      </button>
                  </div>
                  <NavLink
                      to={"/registrar_desarrollador"}
                      className="text-[#3699FF] hover:text-[#0073E9] transition-all duration-150 font-normal text-sm"
                  >
                      ¿Eres Desarollador?
                  </NavLink> 
            </div>
            </motion.div>
        </AnimatePresence>
     
  );
};

export default RegistrarEmpresa;
