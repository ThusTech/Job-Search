import HomePage from "@/pages/HomePage"
import JobsPage from '@/pages/JobsPage'
import JobPage from '@/pages/JobPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import NotFoundPage from '@/pages/NotFoundPage'


import {Route} from "react-router-dom"


const PublicRoutes = [
    <Route key="home" index element={<HomePage />} />,
    <Route key="jobs" path="jobs" element={<JobsPage />} />,
    <Route key="jobDetail" path="jobs/:jobId" element={<JobPage />} />,
    <Route key="login" path="login" element={<LoginPage />} />,
    <Route key="signup" path="signup" element={<SignupPage />} />,
    <Route key="notfound" path="*" element={<NotFoundPage />} />
];

export default PublicRoutes;