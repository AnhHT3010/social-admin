import './App.css'
import './styles/sb-admin-2.min.css'
import './styles/sb-admin-2.min.css'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './components'
import { Admin } from './pages/Admin'
import { Login } from './pages/Account'
// import { Login } from './pages/Account/Login'

function App() {
  return (
    <div className='' id='wrapper'>
      <Routes>
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        ></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  )
}

export default App
