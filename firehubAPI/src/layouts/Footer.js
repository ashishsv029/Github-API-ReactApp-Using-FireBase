import React from 'react'
import { Container } from 'reactstrap'




const Footer=()=>{
    return (
        <Container fluid tag="footer" className="text-center fixed-bottom p-3" style={{width:"100%",backgroundColor:"black",color:"gold"}}>

            <span style={{color:"white"}}>CopyRights@ ashishsv028 </span>
            <div>
               <span style={{color:"white"}}>Designed and Developed by</span>  NagAshishSV
                
            </div>
        </Container>
    )
}
export default Footer