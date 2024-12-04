import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <form className='login'>

      <h2 className='mx-auto text-zinc-300 text-3xl'>Se connecter</h2>
      <div class="inputBox">
        <input type="text" required="required"/>
        <span>email</span>
      </div>

      <div class="inputBox">
        <input type="password" required="required"/>
        <span>password</span>
      </div>

      <button className="text-zinc-300 bg-[#4caf50] px-9 py-4 rounded-xl shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-shadow duration-300">
        Se connecter
      </button>

      <Link to="/register" className='text-zinc-200 text-md mx-auto '>J'ai pas encore un compte </Link>

    </form>
  )
}
