import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import CustomerDashboard from './components/dashboards/CustomerDashboard'
import AgentDashboard from './components/dashboards/AgentDashboard'
import PrivateRoute from './components/Auth/PrivateRoute'
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/customer-dashboard" 
          element={
            <PrivateRoute>
              <Layout isAgent={false}>
                <CustomerDashboard />
              </Layout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/agent-dashboard" 
          element={
            <PrivateRoute>
              <Layout isAgent={true}>
                <AgentDashboard />
              </Layout>
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
