import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Product Not Found</h2>
      <p className="text-gray-600 mb-6 text-center">
        Sorry, the product you are looking for does not exist or may have been removed.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </a>
    </div>
  )
}
