import { Suspense, lazy } from "react";
const {createBrowserRouter} = require('react-router-dom');

const Loading = <div className="{bg-red-700}">Loading...</div>
const Main = lazy(() => inport('../pages/MainPage'))

const About = lazy(() => inport('../pages/AboutPage'))

const root = createBrowserRouter([
    {
        path:'',
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path:'About',
        element: <Suspense fallback={Loading}><About/></Suspense>
    },

])

export default root