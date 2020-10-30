import React,{useReducer, useState,useEffect} from "react"
import {Container,Row,Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"
import Axios from "axios"
import {ToastContainer, toast } from "react-toastify"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import firebase from "firebase/app"
import "firebase/auth"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Pagenotfound from "./pages/Pagenotfound"
import { UserContext } from "./context/UserContext"
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import firebaseConfig from "./config/firebaseconfig"
firebase.initializeApp(firebaseConfig);


const App=()=>{  
    
    const [user,setUser]    =useState(null)

    return (
        <Router>
            <ToastContainer />

            <UserContext.Provider value={{user,setUser}}>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/signin" component={Signin} exact/>
                    <Route path="/signup" component={Signup} exact/>
                    <Route path="/signin" component={Signin} exact/>
                    <Route path="*" component={Pagenotfound} exact/>
                </Switch>
                <Footer />
            </UserContext.Provider>
        </Router>

    )
}

export default App