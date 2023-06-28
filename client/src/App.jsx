import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TaskFormPage from './pages/TaskFormPage'
import TasksPage from './pages/TasksPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TaskContext'
import { Navbar } from './components/Navbar'
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container content-container m-0 w-screen max-h-40">
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/tasks' element={<TasksPage />} />
                <Route path='/tasks/new' element={<TaskFormPage />} />
                <Route path='/tasks:id' element={<TaskFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>

        </BrowserRouter>
      </TaskProvider>
    </AuthProvider >
  )
}

/*
-/-/-/-/ Users /-/-/-/-

omar.gonz996@gmail.com
Nulletta9

principal@testmail.com
principal2022

*/

export default App
