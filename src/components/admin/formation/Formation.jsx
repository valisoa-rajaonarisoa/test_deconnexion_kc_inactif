import React from 'react';


export default function Formation() {
  const data = [
   
    {
      image: 'https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      formation: 'Advanced Node.js',
      price: 200,
      status: 'publié',
      quantity: 5,
      author: 'Jane Smith',
    },
    {
      image: 'https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      formation: 'GraphQL Mastery',
      price: 250,
      status: 'inactif',
      quantity: 8,
      author: 'Alice Johnson',
    },
  ];

  return (
    <div className="overflow-x-auto  rounded-2xl">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-3 text-left">Formation</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Quantité</th>
            <th className="px-4 py-3 text-left">Auteur</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 transition duration-200"
            >
              {/* Formation (Image + Nom) */}
              <td className="px-4 py-3 flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.formation}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium text-gray-700">{item.formation}</span>
              </td>

              {/* Price */}
              <td className="px-4 py-3 text-gray-600">${item.price}</td>

              {/* Status */}
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    item.status === "publié"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              {/* Quantité */}
              <td className="px-4 py-3 text-gray-600">{item.quantity}</td>

              {/* Auteur */}
              <td className="px-4 py-3 text-gray-600">{item.author}</td>

              {/* Action */}
              <td className="px-4 py-3 text-center space-x-2">
                <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                     </svg>

                  
                </button>
                <button className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" 
                    />
                   </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
