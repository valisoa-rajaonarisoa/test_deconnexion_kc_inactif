import React from 'react';

export default function AddFormation({ onAddClick }) {
  return (
    <button
      onClick={onAddClick}
      className='px-8 py-4 bg-green-500 text-zinc-100 text-2xl font-bold mb-7 rounded-xl shadow flex items-center space-x-2'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

    </button>
  );
}
