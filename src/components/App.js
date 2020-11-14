import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe("pk_test_51HksCAHZXnWZzP1eSKyRLBoC4O1fQWmKdvzC2WzMlhfKN8ax2MnGHflNcxTJOdVuDzZNfZtbmyFnbamkuAGPqtQ900eUvlwilv");

function App() {

  const [dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) =>{
      if (user) {
        dispatch({
          type:"SET_USER",
          payload: user
        })
      }else{
        dispatch({
          type:"SET_USER",
          payload: null
        })
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;