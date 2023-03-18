import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import CryptoInfoPage from './components/CryptoInfoPage/CryptoInfoPage'
import Table from './components/Table/Table';

function App() {
  return (
    <div className='App'>
      <Header />
      <Table/>
    </div>
  )
}

export default App
