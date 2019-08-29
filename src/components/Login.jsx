import React, { Component } from 'react'
import 'tachyons';
import "../styles/Login.css";
export default class Login extends Component {

  render() {
    return (
      <div>
      <div className="app1"></div>
      <div className="app2"></div>
      <div className="app3"></div>
      <div class="container mt5 center" style={{display:"flex", flexDirection:"row",marginTop:"15%",maxWidth:"20%", maxHeight:"100%", borderRadius:"5px", height:"500px", width:"300px"}}>
        
        <div class=" pa4 black-80" style={{backgroundColor:"#EF5A5A", borderRadius:"35px"}}>
          <div className="form measure  center pv3 ph4" style={{height:"500px", width:"300px"}}>
           <div id="sign_up" class="ba b--transparent ph0 pt4 mh0 ">
             <legend class="f2 fw5 ph0 pt4 mh0 " style={{display:"flex", color:"#FEFFDF", alignContent:"center", justifyContent:"center", borderRadius:"35px"}}>Login</legend>
             <div class="mt4" style={{borderRadius:"35px", boxShadow:"4px 4px 8px 0px rgba( 0, 0, 0, 0.4 )", borderColor:"#FFE79A"}}>
                <input class=" pa2 input-reset bg-transparent hover-white w-100 grow" type="email" name="email-address"  id="email-address" placeholder="Username" style={{backgroundColor:"#FFE79A", borderRadius:"35px", borderColor:"#FFE79A"}} />
             </div>
             <div class="mv3" style={{borderRadius:"35px", boxShadow:"4px 4px 8px 0px rgba( 0, 0, 0, 0.4 )", borderColor:"#FFE79A" }}>
              <input class=" pa2 input-reset  bg-transparent w-100 grow" type="password" name="password"  id="password" placeholder="Password"  style={{backgroundColor:"#FFE79A", borderRadius:"35px", borderColor:"#FFE79A"}}/>
             </div>
            
             <div class="SignIn" style={{alignContent:"center" ,borderRadius:"35px", borderColor:"#FFE79A"}}>
              <button class="button bg-transparent pv2 ph4  mt3 pointer grow" style={{ borderRadius:"35px", borderColor:"#FFE79A",background:"#FFE79A", color:"black", fontWeight:"bold", position:"center"}}>Sign In</button>
             </div>
            <div class="lh-copy f6 mt3 ba2 b--white grow " style={{color:"white", position:"center", justifyItems:"center", alignItems:"center"}}>
              <a href="#0" class="ba2 b--white grow" style={{color:"white"}}>Forgot your password?</a>
            </div>
          </div>
        </div>

      </div>
      </div>
      </div>  
    )
  }
}
