import React, { Component } from 'react';
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from './components/Context'
class App extends Component {
  constructor() {
    super()
    this.state = {

      isAuthentic: false
    }
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }
  handleAuthentication = (isAuth) => {
    this.setState({
      isAuthentic: isAuth
    })
  }
  handleLogout = () => {
    this.setState({
      isAuthentic: false
    })
    localStorage.removeItem('userData')
    window.location.href = "/"
  }
  getContext = () => ({
    ...this.state,
    handleAuth: this.handleAuthentication,
    logout: this.handleLogout
  })
  render() {
    return (
      <Provider value={this.getContext()}>
        <div className="App">
          <BrowserRouter>
            <>
              <Switch>

                <Route exact path="/"
                  render={
                    props =>
                      (
                        <Login {...props} />
                      )
                  } />
                <Route path="/home" render={
                  props =>
                    (
                      <Home {...props} />
                    )
                } />
              </Switch>
            </>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
