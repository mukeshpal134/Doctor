import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx'
import NotFound from './Pages/NotFound.jsx';
import Login from './Pages/Login.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Posts from './Pages/Blog/Posts.jsx';
import Post from './Pages/Blog/Post.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<NotFound/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='blog' element={<Blog/>}>
        <Route path='' element={<Posts/>}/>
        <Route path=':title' element={<Post/>}/>
      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
