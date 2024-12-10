import React from 'react'
import NavbarPublic from '../../components/public/header/NavbarPublic';
import ContainerHeader from '../../components/public/header/ContainerHeader';
import Categorie from '../../components/public/section/categorie/Categorie';
import Exam from '../../components/public/section/text/Exam';
import Course from '../../components/public/section/course/Course';
import Auteur from '../../components/public/section/auteur/Auteur';




export default function Home() {


  return (
    <>
      <header className='relative pb-36 bg-white'>
        <NavbarPublic/>

        <div>
          <ContainerHeader/>
        </div>
      </header>

      <section>
        <div className="bg-[url('src/assets/img/back.jpg')] bg-cover bg-no-repeat bg-center bg-fixed mb-10">
          <Categorie/>
        </div>

        <Exam/>

        <Course/>


        <Auteur/>

      </section>
      

    </>
  );
}
