import React from 'react'

export default function Login() {
  return (
    <div className='login'>

      <h2 className='mx-auto text-zinc-300 text-3xl'>Let's go ! </h2>
      <div class="inputBox">
        <input type="text" required="required"/>
        <span>email</span>
      </div>

      <div class="inputBox">
        <input type="text" required="required"/>
        <span>password</span>
      </div>

      <button className="text-zinc-300 bg-[#4caf50] px-9 py-4 rounded-xl shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-shadow duration-300">
        Se connecter
      </button>

    </div>
  )
}
