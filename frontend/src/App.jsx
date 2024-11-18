import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage from './pages/JobPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layouts/MainLayout'

import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/jobs/:jobId' element={<JobPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  )
)

export default function App(){
  return <RouterProvider router={router}/> 
}