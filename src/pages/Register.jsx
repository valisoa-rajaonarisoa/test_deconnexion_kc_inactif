import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='login'>

      <h2 className='mx-auto text-zinc-300 text-3xl'>Inscription</h2>
      <div class="inputBox">
        <input type="email" required="required"/>
        <span>email</span>
      </div>

      <div class="inputBox">
        <input type="text" required="required"/>
        <span>pseudo</span>
      </div>

      <div class="inputBox">
        <input type="password" required="required"/>
        <span>password</span>
      </div>

      <div class="inputBox">
        <input type="password" required="required"/>
        <span>confirm password </span>
      </div>

      <button className="text-zinc-300 bg-[#4caf50] px-9 py-4 rounded-xl shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-shadow duration-300">
        Valider
      </button>

      <Link to="/login" className='text-zinc-200 text-md mx-auto '>J'ai deja un compte</Link>

    </div>
  )
}
