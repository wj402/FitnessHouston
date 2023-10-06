/* eslint-disable */

import React, {useEffect} from 'react';
import './asset/css/reset.css'
import './asset/css/App.css';
import Main_Page from './Components/Main_Page/Main_Page';
import Common_Contents from './Components/Common_Contents/Common_Contents'
import Sub_Page from './Components/Sub_Page/Sub_Page'
import Header from './Components/Common_Contents/Header/Header';
import Footer from './Components/Common_Contents/Footer/Footer';
import Announcement from './Pages/Announcement/Announcement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './Components/Common_Contents/ScrollTop/ScrollTop';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route path="/announcement" element={<Announcement />}></Route>
      </Routes>
      <Footer/>
      <ScrollTop />   {/* 클릭했을때 최상단으로 이동 */}
    </div>
    </BrowserRouter>
  )
}

export default App;
