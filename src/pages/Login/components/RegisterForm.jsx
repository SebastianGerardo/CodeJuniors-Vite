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
    const [colorBorde, setColorBorde] = useState('');
    const handleNextStep = (e) => {
        if(!formData.desarrollador_email){setColorBorde('error-input'); return;}
        if(formData.desarrollador_password){
            if(formData.desarrollador_password !== formData.desarrollador_password2){setColorBorde('error-input'); return;}
            setColorBorde('success-input');
        }else{setColorBorde('error-input');return;}
        !formData.desarrollador_nombre ? setColorBorde('error-input') : setColorBorde('success-input');
        setStep(step + 1);
    };
    const handlePrevStep = () => {setStep(step - 1);};

    return (
            <div className='registro'>
                <ProgressBar currentStep={step} totalSteps={3} />
                {
                    step === 1 && (
                        <div className='flex flex-col items-center justify-between pt-6 container h-full'>
                            <h2 className='text-lg mb-6'>Proceso de Ragistro</h2>
                            <div className='flex flex-col container'>
                                <input type="email" value={formData.desarrollador_email} name='desarrollador_email' onChange={handleChange} placeholder='Correo@algo.com' className={`py-2 mb-6 px-5 rounded-lg w-3/5 ${colorBorde}`} />
                                <input type="password" value={formData.desarrollador_password} name='desarrollador_password' onChange={handleChange} placeholder='Ingrese una Contraseña' className={`py-2 mb-6 px-5 rounded-lg w-3/5 ${colorBorde}`} />
                                <input type="password" value={formData.desarrollador_password2} name='desarrollador_password2' onChange={handleChange} placeholder='Repita la contraseña' className={`py-2 mb-6 px-5 rounded-lg w-3/5 ${colorBorde}`} />
                                <p className='flex-none text-red-600'>Contraseña no coinciden</p>
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
                                <input type="text" value={formData.desarrollador_nombre} name='desarrollador_nombre' onChange={handleChange} placeholder='Nombres' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="text" value={formData.desarrollador_apellido} name='desarrollador_apellido' onChange={handleChange} placeholder='Apellidos' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
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
                                <input type="number" value={formData.desarrollador_telefono} name='desarrollador_telefono' onChange={handleChange} placeholder='Telefono' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <input type="text" value={formData.desarrollador_cargo} name='desarrollador_cargo' onChange={handleChange} placeholder='Cargo el cual se dedica' className='py-2 mb-6 px-5 rounded-lg w-3/5' />
                                <textarea value={formData.desarrollador_descripcion} name="desarrollador_descripcion" onChange={handleChange} id="" cols="30" rows="3" className='py-2 mb-6 px-5 rounded-lg w-3/5'></textarea>
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