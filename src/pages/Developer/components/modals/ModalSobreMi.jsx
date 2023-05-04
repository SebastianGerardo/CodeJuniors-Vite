import React from "react";
import { InputBasic } from "../../../../components/Inputs/InputBasic";

const ModalSobreMi = () => {
  return (
    <div className="w-[52rem] h-[30rem] p-8">
      <label className="w-full">
        <span className="text-start block text-sm font-medium text-gray-400">
          Sobre mi
        </span>
        <textarea
          placeholder="Escribe algo sobre ti"
          name="sobreMi"
          className="block w-full h-[8rem] resize-none rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
        ></textarea>
      </label>
    </div>
  );
};

export default ModalSobreMi;
