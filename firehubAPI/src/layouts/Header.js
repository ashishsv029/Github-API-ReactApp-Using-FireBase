import React,{useState,useContext} from 'react'
import {Collapse,Container,Navbar,NavbarToggler,Nav,NavItem,NavLink,NavbarText, NavbarBrand} from "reactstrap"
import {Link} from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header=()=>{

    const context=useContext(UserContext)

    const [isOpen,setIsopen]=useState(false)

    const [signincolor,setSignincolor]=useState("white")
    const [signupcolor,setSignupcolor]=useState("gold")
    const toggle=()=>setIsopen(!isOpen)
    const activate=()=>{
        setSignincolor("gold");
        setSignupcolor("white");
    }
    const activateup=()=>{
        setSignupcolor("gold");
        setSignincolor("white");
    }

    return (
        <Navbar style={{backgroundColor:"black"}} light expand="md">
            <NavbarBrand ><Link to="/" className="text-white" style={{textDecoration:"none"}}><span style={{color:"gold"}}>Fire</span>Hub<span style={{color:"gold"}}></span>API</Link></NavbarBrand>
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email : ""
            }</NavbarText>
            <NavbarToggler  onClick={toggle} style={{backgroundColor:"white"}}/>
            <Collapse isOpen={isOpen} navbar >
                <Nav className="ml-auto" navbar >
                    {
                        context.user?(
                        <NavItem>
                            <NavLink onClick={()=>{context.setUser(null)}} style={{color:"gold"}}>
                                Logout
                            </NavLink>
                        </NavItem>
                        ):(
                            <>
                            <NavItem>
                                <NavLink tag={Link} className="signup" to="/signup" style={{color:signupcolor}} onClick={activateup}>
                                    Signup
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link}to="/signin" style={{color:signincolor}} onClick={activate}>
                                    Signin
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Header