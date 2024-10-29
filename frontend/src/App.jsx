import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage from './pages/JobPage'
import AddJobsPage from './pages/AddJobsPage'
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
      <Route path='/jobs/:id' element={<JobPage/>}/>
      <Route path='/add-jobs' element={<AddJobsPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  )
)

export default function App(){
  return <RouterProvider router={router}/> 
}