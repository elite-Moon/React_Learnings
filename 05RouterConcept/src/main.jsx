/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './User/User';
// import Github, { githubLoader } from './components/Github/Github';
import Github from './components/Github/Github';

//! this is another method for routing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, //To fix the header and footer we are using Layout  adn further we can use children element
//     children: [
//       {
//         path: '', //* here in this method we are not using Slash bcoz it was used already above
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//! This is here prefered and easier method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* this is used for showing dynamic data from same path and it will show diffrent data at same route like faacebook diffrent id on same path of route */}
      <Route path='user/:userId' element={<User />} />
      <Route path='github' element={<Github />} />
      {/* <Route loader={githubLoader} path='github' element={<Github />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
