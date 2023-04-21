import React, { useState } from 'react'
import './PerfilMainCompany.css'

export default function PerfilMainCompany(props) {
  const [ value2, setValue2 ] = useState("")
  const [ change, setChange ] = useState(false) 

  return (
    <div className='main-company'>
      <section className='main-company_description'>
        <div className='top-main_description'>
          <h1 className='title-section-company'>Descripción:</h1>
          <button onClick={() => setChange(!change)}>{change ? "Cancel" : "Edit"}</button>
        </div>
        
          {change 
            ? 
          <form className='change-value' onSubmit={ev => { ev.preventDefault() ; setValue2(ev.target.description.value) ; setChange(!change) }}>
            <textarea name='description' required={true}/>
            <button type='submit'>Guardar</button>
          </form> 
            : 
          <p>{value2 === "" ? props.descripcionEmpresa : value2 }</p>}
          
        
      </section>
    </div>
  )
}
