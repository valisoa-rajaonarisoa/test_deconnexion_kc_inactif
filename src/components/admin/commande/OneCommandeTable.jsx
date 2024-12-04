import React from 'react'

export default function OneCommandeTable() {
    const data = [
        {
          id: 1,
          username: "john",
          email: "jon@gmail.com",
          quantity: 10,
        },
        {
          id: 5,
          username: "aria",
          email: "aria@gmail.com",
          quantity: 0,
        },
        {
          id: 10,
          username: "jarima",
          email: "arima@gmail.com",
          quantity: 0,
        },
        {
          id: 12,
          username: "tojo",
          email: "tojo@gmail.com",
          quantity: 2,
        },
      ];
    
      // *************total formation 
      const totalFormation = 20;
    
      return (
        <div className="overflow-x-auto rounded-2xl">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-3 text-left">Pseudo</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                 
                  <td className="px-4 py-3 flex items-center space-x-3">
                    <span className="font-medium text-gray-700">{user.username}</span>
                  </td>
    
                 
                  <td className="px-4 py-3 text-gray-600">{user.email}</td>

                  <td className="px-4 py-3 text-gray-600">{"24-10-02  22:02"}</td>
    
    
                
                  <td className="px-4 py-3 text-center space-x-2">
                    <button className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
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
