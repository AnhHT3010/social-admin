import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
interface PrivateRouteProps {
  children: ReactNode
}
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const user = true
  return user ? <>{children}</> : <Navigate to='/login' />
}
