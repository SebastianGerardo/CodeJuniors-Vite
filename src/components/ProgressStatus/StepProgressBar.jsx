import { motion } from "framer-motion";

export default function StepProgressBar({ steps, currentStep }) {
  const stepsArray = Array.from(Array(steps).keys());

  const progressWidth = `${(currentStep / (steps - 1)) * 100}%`;

  return (
    <div className="relative h-16 flex justify-between items-center">
      {stepsArray.map((step) => (
        <div
          key={step}
          className={`step-progress-bar__step flex flex-col items-center bg-white border border-gray-400 rounded-full p-1 px-3 z-10 min-w-[36.39px] min-h-[37.6px] ${
            currentStep >= step ? "active" : ""
          }`}
        >
          <div
            className={`step-progress-bar__step-number font-semibold text-lg ${
              currentStep >= step ? "text-black" : "text-gray-400"
            }`}
          >
            {step + 1}
          </div>
        </div>
      ))}
      <motion.div
        className={`step-progress-bar__progress-bar absolute h-1 rounded-full bg-gray-300`}
        style={{
          left: "0%",
          transform: "none",
          width: progressWidth,
        }}
        initial={{ width: "100%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={`step-progress-bar__progress-bar absolute h-1 rounded-full bg-black`}
        style={{
          left: "0%",
          transform: "none",
          width: progressWidth,
        }}
        initial={{ width: "0%" }}
        animate={{ width: progressWidth }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}


//COMO USARLO


//LOGICA QUE DEBES COLOCAR EN EL COMPONENTE DONDE LO VAS A USAR

// const sectionStep = {
//     0: <InformacionCiclo />,
//     1: <RegistrarPadre />,       //----> Aqui van los componentes que se van a ir mostrando
//     2: <RegistrarAlumno />,
//     3: <EmitirComprobante />,
// };


//ESTA LOGICA ES PARA QUE VAYA AVANZANDO O RETROCEDIENTO EN LOS PASOS
// const [currentStep, setCurrentStep] = useState(0);

// const handleNextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handlePrevStep = () => {
//     setCurrentStep(currentStep - 1);
//   };

//RETORNO DE TU COMPONENTE

{/* <StepProgressBar steps={4} currentStep={currentStep} /> */} //ESTE ES EL COMPONENTE DE BARRA
{/* <div>
    {sectionStep[currentStep]} // ----> Estos son los componentes que se van a ir mostrando
</div> */}


//ESTOS SON LOS BOTONES PARA AVANZAR O RETROCEDER
// <button
//   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//   onClick={handlePrevStep}
// >
//   Anterior
// </button>
{/* <button
  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
  onClick={currentStep !== 3 ? handleNextStep : ""}
>
  Siguiente
</button> */}