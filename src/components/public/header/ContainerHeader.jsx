import React from 'react'

export default function ContainerHeader() {
  return (
    <div className="w-full flex relative bg-white ">

      <div className="w-[50%] pt-44 pb-32 px-14  bg-white">
        <h2 className="text-5xl text-blue-500 mb-10 font-black">
          Your Course To Success
        </h2>

        <p className="font-light text-md text-blue-400 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          officiis enim? Soluta voluptates vitae ea ipsam corrupti totam magnam
          asperiores. Nulla facere ipsum assumenda numquam voluptatibus molestiae
          voluptates tempora ullam!
        </p>

        <button className="bg-blue-600 px-10 py-5 rounded-xl text-zinc-200 text-md relative overflow-hidden group shadow-lg">
          <span className="relative z-10">Ready more</span>
          <span className="absolute top-0 left-0 w-full h-full bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
        </button>
      </div>

      <div className="w-[50%] bg-[#6c5ce7] z-20 rounded-sm relative  flex items-center pt-44 pb-32" 
      >
        
        <div className=' h-96 w-[80%] relative top-2 left-[-100px]'>
            <img src="src/assets/img/layer.png" alt="" className='w-full h-full'/>
        </div>
      </div>



    </div>
  )
}
