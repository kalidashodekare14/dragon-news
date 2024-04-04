
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/News_Details/NewsDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../news.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes>
                    <NewsDetails></NewsDetails>
                </PrivateRoutes>,
                loader: () => fetch('../news.json')
            }
        ]
    }
])

export default routes;