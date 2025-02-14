import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

const Sidebar = ({ isAgent }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const isActiveRoute = (path) => {
    return location.pathname === path ? 'bg-blue-700' : ''
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-green-600 to-white transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8 text-white">
            {isAgent ? 'Agent Portal' : 'Customer Portal'}
          </h2>
          <nav className="space-y-4">
            {isAgent ? (
              <button
                onClick={() => navigate('/agent-dashboard')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white hover:bg-green-700 transition-colors ${
                  isActiveRoute('/agent-dashboard') ? 'bg-green-700' : ''
                }`}
              >
                Tickets
              </button>
            ) : (
              <button
                onClick={() => navigate('/customer-dashboard')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white hover:bg-green-700 transition-colors ${
                  isActiveRoute('/customer-dashboard') ? 'bg-green-700' : ''
                }`}
              >
                Dashboard
              </button>
            )}
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 rounded-lg text-white hover:bg-green-700 transition-colors"
            >
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
