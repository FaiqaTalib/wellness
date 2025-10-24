import React from 'react'

const AppCard = ({ title, color, description, features, button }) => {
  return (
    <div className={`bg-gradient-to-br ${color} to-white p-6 rounded-2xl shadow`}>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-gray-600">{description}</p>
      <ul className="mt-3 text-sm text-gray-600 space-y-1">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <div className="mt-4">
        <a className="inline-block px-4 py-2 text-sm rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100">
          {button}
        </a>
      </div>
    </div>
  )
}

export default AppCard
