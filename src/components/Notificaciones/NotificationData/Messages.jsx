import React, { useState } from 'react'
import './Messages.css'

export const Chat = () => {
  const [chat, setChat] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className='chat-section' onSubmit={handleSubmit}>
      <input type="text" placeholder='Aa' onChange={(e) => setChat(e.target.value)} />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export const Gerardo = () => {
  return (
    <section className='section-message'>
      <div className='message-sends'>
        <h1>mensajes</h1>
      </div>
      <div className='message-chats'>
        {<Chat/>}
      </div>
    </section>
  )
}


