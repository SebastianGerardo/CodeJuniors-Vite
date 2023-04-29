import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const RegisterForm = () => {

    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData, [name]: value})
    }
    const handleSend = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    const [step, setStep] = useState(1);
    const handleNextStep = (e) => {setStep(step + 1);handleSend(e);};
    const handlePrevStep = () => {setStep(step - 1);};

    return (
            <div className='registro'>
                <ProgressBar currentStep={step} totalSteps={3} />
                {
                    step === 1 && (
                        <div className='flex flex-col items-center justify-between pt-6 container h-full'>
                            <h2 className='text-lg mb-6'>Proceso de Ragistro</h2>
                            <div className='flex flex-col container'>
                                <input type="email" name='desarrollador_email' onChange={handleChange} placeholder='Correo@algo.com' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="password" name='desarrollador_password' onChange={handleChange} placeholder='Ingrese una Contraseña' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="password" name='desarrollador_password2' onChange={handleChange} placeholder='Repita la contraseña' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
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
                                <input type="text" name='desarrollador_nombre' onChange={handleChange} placeholder='Nombres' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="text" name='desarrollador_apellido' onChange={handleChange} placeholder='Apellidos' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
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
                                <input type="number" name='desarrollador_telefono' onChange={handleChange} placeholder='Telefono' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="text" name='desarrollador_cargo' onChange={handleChange} placeholder='Cargo el cual se dedica' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <textarea name="desarrollador_descripcion" onChange={handleChange} id="" cols="30" rows="3" className='py-2 mb-6 px-5 rounded-lg w-3/5'></textarea>
                            </div>
                            <div className='flex flex-row justify-between container'>
                                <button onClick={handlePrevStep} className='py-3 px-5'>Anterior</button>
                                <button className='py-3 px-5 bg-blue-900 text-white rounded-lg' onClick={handleSend}>Enviar</button>
                            </div>
                        </div>
                    )
                }
            </div>
    );
};

export default RegisterForm;