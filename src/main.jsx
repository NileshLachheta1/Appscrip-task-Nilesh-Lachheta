import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { Home } from './components/index.js'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
