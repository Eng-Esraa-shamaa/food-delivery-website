import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLoginForm from './components/adminLogin/adminLogin'
import Home from './pages/Home/Home'


const App = () => {
  const url ='http://localhost:4000';
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      {!loggedIn ? (
        <AdminLoginForm setLoggedIn={setLoggedIn} url={url} />
      ) : (
        <>
          <hr />
          <div className='app-content'>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Add' element={<Add url={url} />} />
              <Route path='/List' element={<List url={url} />} />
              <Route path='/Orders' element={<Orders url={url} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  )
}

export default App;
