import React from 'react'

export default function Categorie() {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-3 text-left">Nom</th>
            <th className="px-6 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}

