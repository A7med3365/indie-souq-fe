import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Films from './pages/Films';
import Tests from './pages/Tests';
import ProjectDetails from './pages/ProjectDetails';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Creators from './pages/Creators';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import useRequest from './hooks/use-request';
import { useState } from 'react';
import { useEffect } from 'react';

// const backendUrl = process.env;

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { doRequest, errors } = useRequest({
    url: '/api/users/currentuser',
    method: 'get',
  });
  useEffect(async () => {
    // console.log('REACT_APP_BACKEND_URL:', backendUrl);
    if (!process.env.REACT_APP_BACKEND_URL) {
      console.log('backend url must be defined');
    }
    // await doRequest({
    //   onSuccess: (res) => {
    //     if (res.data.currentUser) {
    //       setCurrentUser(res.data.currentUser);
    //       setIsAuth(true);
    //       console.log(res.data);
    //     } else {
    //       setCurrentUser(null);
    //       setIsAuth(false);
    //     }
    //   },
    // });
  }, []);
  return (
    <div>
      <Navbar currentUser={currentUser} isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/details" element={<ProjectDetails />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/t" element={<Tests />} />
      </Routes>
      <div className="bg-footerBg w-full mt-20">
        <div className="max-w-[1150px] m-auto text-white px-10 py-28 xl:px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
