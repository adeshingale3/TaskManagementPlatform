import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-white text-white-600 py-4 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">© 2024 Created by Adesh</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:text-gray-200">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-200">Terms of Service</a>
          <a href="#" className="text-sm hover:text-gray-200">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer