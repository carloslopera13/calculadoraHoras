import React from 'react'
import Header from './components/Header/Header'
import Register from './components/Register/Register'


export default function App() {
  return (
    <div className="container">
      <Header />
        <div className="row">
          <div className="col-sm-6">
            <Register />
          </div>
        </div>

      </div>
  )
}

