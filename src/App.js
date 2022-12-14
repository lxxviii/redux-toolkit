import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes'
//import { useSelector } from "react-redux";
//import Counter from "./components/counter";
//import CounterActions from "./components/counterActions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  dark: state.site.dark,
  user: state.auth.user
})

export default function App({dark, user}) {

  //mapStateToProps ile aynı işlemi yapıyor.
  //const { dark } = useSelector(state => state.site)
  //const { user } = useSelector(state => state.auth)

  return (
    <React.Fragment>
      <Router>
        <div className={dark ? 'dark' : 'light'}>
          <Header />
          {/* <Counter />
        <CounterActions /> */}
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path} render={() => {
                if (route.auth && !user) {
                  console.log(user)
                  debugger
                  return <Navigate to='/login' />
                }
                return <route.component />
              }} />
            ))}
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  )
} connect(mapStateToProps)(App)