import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Register() {


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
    console.log(data);


    // ************si les mot de passe ne correspond pas 
    if(data.password != data.passwordConfirm)
    {
      return toast.error("Les mots de passe ne correspondent pas");
    }



    // ******************recupartion des datas 

    const membre = {
      email: data.email,
      username: data.username,
      password: data.password,
      role: "membre",
    };
    
    try {
      // Vérifie si le membre existe déjà
      const isMmembreExist = await axios.get(
        `${import.meta.env.VITE_API_URL_MEMBRE}?email=${membre.email}`
      );
    
     
      if (isMmembreExist.data.length == 0) {
        await toast.promise(
          axios.post(`${import.meta.env.VITE_API_URL_MEMBRE}`, membre),
          {
            pending: "Enregistrement en cours....",
            success: "Bravo, compte créé avec succès",
            error: "Une erreur s'est produite",
          }
        );

        reset() //vider les champs 




        // ***********************redirection rapide 

        const user={
          email:membre.email,
          username:membre.username,
          role:membre.role
        }
        localStorage.setItem("user",user);
        navigate("/membre");



      } else {
        
        toast.error("Cet utilisateur existe déjà");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
    

  }


   
 



  return (
    <form 
      className='login'

      onSubmit={handleSubmit(onSubmit)}
    >
      


      <h2 className='mx-auto text-zinc-300 text-3xl'>Inscription</h2>
      <div class="inputBox">


        {/* ******************champ email  */}
        <input 
          type="email" 
          required="required"

          // ***********************recuperation 

          {...register("email",
            {
              required:"Entrez votre email s'il vous plait ",
              minLength:{
                value:5,
                message:"Entrez aux moins 5 caracteres "
              }
            }
          )
          }
        />
        <span>email</span>
      </div>


      <div class="inputBox">

        {/* ******************username  */}
        <input 
          type="text"
          required="required"

          // ***********************recuperation 

          {...register("username",
            {
              required:"Entrez votre username s'il vous plait ",
              minLength:{
                value:5,
                message:"Entrez aux moins 2 caracteres "
              }
            }
          )
          }
        />
        <span>Username</span>
      </div>

      <div class="inputBox">
        <input 
          type="password" 
          required="required"

          {...register("password",
            {
              required:"Entrez votre mot de passe s'il vous plait ",
              minLength:{
                value:5,
                message:"Entrez aux moins 5 caracteres "
              }
            }
          )
          }
        />
        <span>password</span>
      </div>

      <div class="inputBox">
        <input 
          type="password" 
          required="required"

          {...register("passwordConfirm",
            {
              required:"Entrez votre mot de passe s'il vous plait ",
              minLength:{
                value:5,
                message:"Entrez aux moins 5 caracteres "
              }
            }
          )
          }
        />
        <span>confirm password </span>
      </div>

      <button className="text-zinc-300 bg-[#4caf50] px-9 py-4 rounded-xl shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-shadow duration-300"

       type='submit'
      >
        Valider
      </button>

      <Link to="/login" className='text-zinc-200 text-md mx-auto '>J'ai deja un compte</Link>

    </form>
  )
}
