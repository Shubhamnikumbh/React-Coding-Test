import React from 'react'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux';
import store from '../Store/store';
import NavBar from './Navbar';


function RootLayout() {

  return (
    <div>
        <Provider store={store}>
        <NavBar/>
      <main>
        <Outlet/>
      </main>
        </Provider>
   
    </div>
  )
}

export default RootLayout