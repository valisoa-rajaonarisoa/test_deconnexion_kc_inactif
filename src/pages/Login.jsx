import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {


  // **********************navigation 

  const navigate = useNavigate()

  // *********************initialisation 
  const {handleSubmit,register,watch,formState:{error},reset}= useForm();

  // ********************redirection si un user est connecté 
  useEffect(()=>{

    const storedMembre = JSON.parse(localStorage.getItem("membre"));
    // ***********si il est actuellement connecté
    if(storedMembre?.role === "admin")
    {
      navigate("/admin")
    }else if(storedMembre?.role === "membre"){
      navigate("/membre")
    }

  },[])

  // *****************fonction onSubmit 
  const onSubmit= async (data)=>{
  


  

    // ******************recupartion des datas
  
    try {
      

      const isMmembreExist= await axios.get(`${import.meta.env.VITE_API_URL_MEMBRE}/${data.email}`);

      if(isMmembreExist.data.length>0){
        // *************existe et verification du mdp


        const membre=isMmembreExist.data[0];

        if(membre.password===data.password)
        {
          toast.success("Bienveu "+membre.username);



          // ********************ajout dans le localStorage
          localStorage.setItem("membre", JSON.stringify(membre));

          if(membre.role=="admin")
          {
            navigate("/admin")
          }

          if(membre.role=="membre")
            {
              navigate("/membre")
            }

        }else{
          toast.error("Mot de passe incorrecte ")
        }

      }else{

        toast.error("Cette utilisateur n'existe pas ")
      }

    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
    

  }



  


  return (
    <form className='login'
     
     onSubmit={handleSubmit(onSubmit)}
    >

      <h2 className='mx-auto text-zinc-300 text-3xl'>Se connecter</h2>
      <div class="inputBox">
        <input 
          type="email" 
          required="required"

          // ***********************recuperation 

          {...register("email",{required:"Veuillez entrer votre email"})}
        />
        <span>email</span>
      </div>

      <div class="inputBox">
        <input 
          type="password" 
          required="required"

          {...register("password",{required:"Veuillez entrer votre mot de passe"})}

        />
        <span>password</span>
      </div>

      <button className="text-zinc-300 bg-[#4caf50] px-9 py-4 rounded-xl shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-shadow duration-300" type='submit'>
        Se connecter
      </button>

      <Link to="/register" className='text-zinc-200 text-md mx-auto '>J'ai pas encore un compte </Link>

    </form>
  )
}
