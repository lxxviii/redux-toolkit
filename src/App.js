import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes'
import { useSelector } from "react-redux";
import Counter from "./components/counter";
import CounterActions from "./components/counterActions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from 'react';

export default function App() {

  const { dark } = useSelector(state => state.site)
  const { user } = useSelector(state => state.auth)

  console.log(routes)

  return (
    <React.Fragment>

      <Router>
        <div className={dark ? 'dark' : 'light'}>
          <Header />
          {/* <Counter />
        <CounterActions /> */}
          <Routes>
            {routes.map((route) => (
              <Route exact={route.exact} path={route.path} render={() => {
                if (route.auth && !user) {
                  console.log(user)
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
}