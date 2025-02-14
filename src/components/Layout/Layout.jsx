import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

const Layout = ({ children, isAgent }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isAgent={isAgent} />
      <div className="flex-1 ml-0 md:ml-64 transition-all duration-300 ease-in-out flex flex-col">
        <main className="p-4 md:p-6 max-w-7xl mx-auto flex-grow w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout