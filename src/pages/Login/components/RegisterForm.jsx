import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const RegisterForm = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    return (
            <div className='registro'>
                <ProgressBar currentStep={step} totalSteps={3} />
                {
                    step === 1 && (
                        <div className='flex flex-col items-center justify-between pt-6 container h-full'>
                            <h2 className='text-lg mb-6'>Proceso de Ragistro</h2>
                            <div className='flex flex-col container'>
                                <input type="email" placeholder='Correo@algo.com' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="password" placeholder='Ingrese una Contraseña' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="password" placeholder='Repita la contraseña' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                            </div>
                            <div className='flex flex-row justify-between container'>
                                <button onClick={handlePrevStep} disabled className='py-3 px-5'>Anterior</button>
                                <button onClick={handleNextStep} className='py-3 px-5 bg-blue-900 text-white rounded-lg'>Siguiente</button>
                            </div>
                        </div>
                    )
                }
                {
                    step === 2 && (
                        <div className='flex flex-col items-center justify-between pt-6 container h-full'>
                            <h2 className='text-lg mb-6'>Proceso de Ragistro</h2>
                            <div className='flex flex-col container'>
                                <input type="text" placeholder='Nombres' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="text" placeholder='Apellidos' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="file" placeholder='Repita la contraseña' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                            </div>
                            <div className='flex flex-row justify-between container'>
                                <button onClick={handlePrevStep} className='py-3 px-5'>Anterior</button>
                                <button onClick={handleNextStep} className='py-3 px-5 bg-blue-900 text-white rounded-lg'>Siguiente</button>
                            </div>
                        </div>
                    )
                }
                {
                    step === 3 && (
                        <div className='flex flex-col items-center justify-between pt-6 container h-full'>
                            <h2 className='text-lg mb-6'>Proceso de Ragistro</h2>
                            <div className='flex flex-col container'>
                                <input type="number" placeholder='Telefono' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="text" placeholder='Cargo el cual se dedica' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <textarea name="" id="" cols="30" rows="3" className='py-2 mb-6 px-5 rounded-lg w-3/5'></textarea>
                            </div>
                            <div className='flex flex-row justify-between container'>
                                <button onClick={handlePrevStep} className='py-3 px-5'>Anterior</button>
                                <button type="submit" className='py-3 px-5 bg-blue-900 text-white rounded-lg'>Enviar</button>
                            </div>
                        </div>
                    )
                }
            </div>
    );
};

export default RegisterForm;