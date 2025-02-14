import { Navigate } from 'react-router-dom'
import { auth } from '../../firebase'

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser

  if (!user) {
    return <Navigate to="/" />
  }

  return children
}

export default PrivateRoute