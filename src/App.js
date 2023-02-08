import React from 'react'
import Feed from './components/Feed'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import "./App.css";
import Widgets from './components/Widgets';
import Login from './components/Login';
import {useStateValue} from "./components/StateProvider";


export default function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user  ? (
        <Login />
      ) : (
      <>
          <Header />
          <div className='app__body'>
              <Sidebar />
              <Feed />
              <Widgets />
          </div>
      </>
      )}
    </div>
  )
}
