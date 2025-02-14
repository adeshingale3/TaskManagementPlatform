import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [isAgent, setIsAgent] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      if (isAgent) {
        navigate('/agent-dashboard')
      } else {
        navigate('/customer-dashboard')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-white py-12 px-4 sm:px-6 lg:px-8 gap-10">
      
      <div className="max-w-md w-full space-y-8 glass-effect p-8 rounded-xl shadow-2xl animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Welcome Back</h1>
          <h2 className="text-xl text-center text-gray-600 mb-8">
            {isAgent ? 'Agent Portal' : 'Customer Portal'}
          </h2>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Switch.Group as="div" className="flex items-center">
              <Switch.Label className={`mr-4 ${!isAgent ? 'font-semibold text-blue-600' : 'text-gray-500'}`}>
                Customer
              </Switch.Label>
              <Switch
                checked={isAgent}
                onChange={setIsAgent}
                className={`${
                  isAgent ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    isAgent ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out`}
                />
              </Switch>
              <Switch.Label className={`ml-4 ${isAgent ? 'font-semibold text-blue-600' : 'text-gray-500'}`}>
                Agent
              </Switch.Label>
            </Switch.Group>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-500 text-sm text-center p-3 rounded-lg animate-fadeIn">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div className='bg-white p-6 rounded-2xl w-80'>
        <b>Login credentials :</b>
        <br/>
        <h1>1. Agent Login : </h1>
        <h2>email - agent@support.com Password - agent123</h2>
        <br/>
        <h1>2. Customer Login : </h1>
        <h2>email - customer@support.com Password - customer123</h2>
      </div>
    </div>
  )
}

export default Login
