import React, { Component } from "react";
import "tachyons";
import "../styles/Login.css";
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="app1"></div>
                <div className="app2"></div>
                <div className="app3"></div>
                <div
                    class="container mt5 center"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "15%",
                        maxWidth: "20%",
                        maxHeight: "100%",
                        borderRadius: "5px"
                    }}
                >
                    <div
                        class=" pa4 black-80"
                        style={{
                            backgroundColor: "#EF5A5A",
                            borderRadius: "35px"
                        }}
                    >
                        <div className="form measure  center pv3 ph4">
                            <div
                                id="sign_up"
                                class="ba b--transparent ph0 mh0 "
                            >
                                <legend
                                    class="f2 fw5 ph0 mh0 pv3"
                                    style={{
                                        display: "flex",
                                        color: "#FEFFDF",
                                        alignContent: "center",
                                        justifyContent: "center",
                                        borderRadius: "35px"
                                    }}
                                >
                                    Login
                                </legend>
                                <div class="pv3">
                                    <div class="mt4"  style={{borderRadius:"35px", backgroundColor:"#FFE79A", borderColor:"#FFE79A"}}>
                                        <input
                                            class="b pa2 input-reset ba b--white bg-transparent w-100"
                                            type="email"
                                            name="email-address"
                                            id="email-address"
                                            placeholder="Username"
                                            style={{
                                                border:"2px #FFE79A"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="mv3"  style={{borderRadius:"35px",backgroundColor:"#FFE79A", }}>
                                    <input
                                        class="b pa2 input-reset ba b--white bg-transparent w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        style={{
                                            border:"2px #FFE79A"
                                        }}
                                    />
                                </div>

                                <div class="" style={{justifyContent:"center", alignItems:"center", borderColor:"#FFE79A", borderRadius:"35px"}}>
                                    <button
                                        class="button bg-transparent pv2 ph3 mt3 pointer grow"
                                        style={{
                                            border: "2px #FFE79A",
                                            background: "#FFE79A",
                                            color: "#7749F5",
                                            borderRadius:"35px"
                                        }}
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div
                                    class="lh-copy f6 mt3 ba2 b--white grow"
                                    style={{ color: "white" }}
                                >
                                    <a
                                        href="#0"
                                        class="ba2 b--white grow"
                                        style={{ color: "white" }}
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
