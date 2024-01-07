import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Films from './pages/Films';
import Tests from './pages/Tests';
import ProjectDetails from './pages/ProjectDetails';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Creators from './pages/Creators';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import useRequest from './hooks/use-request';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useCallback } from 'react';
import ProjectCreateUpdate from './pages/ProjectCreateUpdate';
import UserDashboard from './pages/UserDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterCreator from './pages/RegisterCreator';

// import { useRecoilState } from 'recoil';
// import { currentUser } from './store/states';

// const backendUrl = process.env;

export default function App() {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [isFilmmaker, setIsFilmmaker] = useState(false);
  const [hide, setHide] = useState(false);
  // const [userId, setUserId] = useRecoilState(currentUser);
  const [userId, setUserId] = useState(null);
  const { doRequest, isLoading } = useRequest({
    url: '/api/users/currentuser',
    method: 'get',
    onSuccess: (res) => {
      if (res.data.currentUser) {
        setUserId(res.data.currentUser.id);
        setIsFilmmaker(res.data.currentUser.isFilmmaker);
        setIsAuth(true);
        // console.log(res.data);
      } else {
        setUserId(null);
        setIsAuth(false);
      }
    },
  });

  const { doRequest: doLogout } = useRequest({
    url: '/api/users/signout',
    method: 'get',
    onSuccess: (res) => {
      setIsAuth(false);
      setUserId(null);
    },
  });

  const logout = async () => {
    await doLogout();
  };

  // const fetch = useCallback(async () => {
  //   await doRequest();
  // }, [doRequest]);

  useEffect(() => {
    // console.log('REACT_APP_BACKEND_URL:', backendUrl);
    if (!process.env.REACT_APP_BACKEND_URL) {
      console.log('backend url must be defined');
    }
    const fetch = ()=>{
      doRequest()
    }
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  useEffect(() => {
    // console.log({window});
    const path = location.pathname;
    if (path.startsWith('/project') || path.startsWith('/dashboard')) {
      setHide(true);
    } else {
      setHide(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return (
    <div>
      {!hide && (
        <Navbar
          userId={userId}
          isFilmmaker={isFilmmaker}
          isAuth={isAuth}
          isLoading={isLoading}
          logout={logout}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/details" element={<ProjectDetails />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project" element={<ProjectCreateUpdate />} />
        <Route path="/project/:projectId" element={<ProjectCreateUpdate />} />
        <Route path="/dashboard" element={<UserDashboard userId={userId} />} />
        <Route path='/register' element={<RegisterCreator />} />
        <Route path="/t" element={<Tests userId={userId} />} />
      </Routes>
      {!hide && (
        <div className="bg-footerBg w-full mt-20">
          <div className="max-w-[1150px] m-auto text-white px-10 py-28 xl:px-0">
            <Footer />
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
