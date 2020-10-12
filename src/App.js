import React, { Component } from 'react'
import Header from './components/Header/Header'
import Register from './components/Register/Register'



export default class App extends Component {

  render() {
    return (
      <div className="container">
      <Header />
        {/* <div className="row"> */}
          {/* <div className="col-sm-6"> */}
            <Register />
          {/* </div> */}
        {/* </div> */}

      </div>
    )
  }
}


