import {
    Route, 
    createBrowserRouter, 
    createRoutesFromElements
} from "react-router-dom"

import PublicRoutes from "./routes/PublicRoutes"
import MainLayout from "@/layouts/MainLayout"


const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                {PublicRoutes}
            </Route>
        )
    );

export default router