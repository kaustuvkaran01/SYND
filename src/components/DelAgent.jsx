import React, { Component } from "react";
import "tachyons";
import "../styles/Dashboard.css";

export default class Login extends Component {
    render() {
        return (
            <div>
                <div
                    class="col1 fl w-300px vh-100 hw-20 tc"
                    style={{ backgroundColor: "#ffe79a" }}
                >
                    <img
                        src="https://www.pngrepo.com/png/131598/170/notepad.png"
                        alt="..."
                        class="w-25 h-15 tc pv4"
                    />
                    <div style={{ flex: 1, flexDirection: "column" }}>
                        <div
                            class="tl pl5"
                            style={{
                                width: 300,
                                height: 75,
                                color: "#EF5A5A"
                            }}
                        >
                            <a href="#" style={{color:"#EF5A5A"}}><h2>DASHBOARD</h2></a>
                        </div>
                        <div
                            class="tl pl5"
                            style={{
                                width: 300,
                                height: 50,
                                color: "#EF5A5A"
                            }}
                        >
                            <a href="#" style={{color:"#EF5A5A"}}><h4>Delete Request</h4></a>
                        </div>
                        <div
                            class="tl pl5"
                            style={{
                                width: 300,
                                height: 50,
                                color: "#EF5A5A"
                            }}
                        >
                            <a href="#" style={{color:"#EF5A5A"}}><h4>Delete Agent</h4></a>
                        </div>
                        <div
                            class="tl pl5"
                            style={{
                                width: 300,
                                height: 50,
                                color: "#EF5A5A"
                            }}
                        >
                            <a href="#" style={{color:"#EF5A5A"}}><h4>Sign Out</h4></a>
                        </div>
                    </div>
                </div>
                <div
                    class="col2 fl w-80 vh-100 tc"
                    style={{ backgroundColor: "#FEFFDF" }}
                >
                    <div className="app1"></div>
                    <div className="app2"></div>
                    <div className="app3"></div>
                    <div style={{ color: "#EF5A5A" }}>
                        <h1>Table</h1>
                    </div>
                    <div class="pa3 table">
                        <div class="overflow-auto">
                            <table class="f6 w-100 mw8 center" cellspacing="0">
                                <thead>
                                    <tr class="stripe-dark">
                                        <th class="fw6 tl pa3 bg-white" style={{borderTopLeftRadius:"5px", backgroundColor:"#ffe79a", color:"#EF5A5A"}}>
                                            Employee Name
                                        </th>
                                        <th class="fw6 tl pa3 bg-white" style={{backgroundColor:"#ffe79a", color:"#EF5A5A"}}>
                                            Branch Name
                                        </th>
                                        <th class="fw6 tl pa3 bg-white" style={{backgroundColor:"#ffe79a", color:"#EF5A5A"}}>
                                            Email
                                        </th>
                                        <th class="fw6 tl pa3 bg-white" style={{backgroundColor:"#ffe79a", color:"#EF5A5A"}}>
                                            Employee Code
                                        </th>
                                        <th class="fw6 tl pa3 bg-white" style={{backgroundColor:"#ffe79a", color:"#EF5A5A"}}>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="lh-copy">
                                    <tr class="stripe-dark">
                                        <td class="pa3 bg-light-gray">
                                            Hassan Johnson
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            @hassan
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            hassan@companywithalongdomain.co
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            14419232532474
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                             <button id="del-btn" class="grow"> Delete</button>         {/* TODO: Buttons mein css daalni hai mere system pe nahi dal rahi hai*/}
                                        </td>
                                    </tr>
                                    <tr class="stripe-dark">
                                        <td class="pa3 bg-light-gray">
                                            Taral Hicks
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            @hicks
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            taral@companywithalongdomain.co
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            72326219423551
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            <button id="del-btn" class="grow"> Delete</button>
                                        </td>
                                    </tr>
                                    <tr class="stripe-dark">
                                        <td class="pa3 bg-light-gray">
                                            Tyrin Turner
                                        </td>
                                        <td class="pa3 bg-light-gray">@tt</td>
                                        <td class="pa3 bg-light-gray">
                                            ty@companywithalongdomain.co
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            92325170324444
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            <button id="del-btn" class="grow"> Delete</button>
                                        </td>
                                    </tr>
                                    <tr class="stripe-dark">
                                        <td class="pa3 bg-light-gray">
                                            Oliver Grant
                                        </td>
                                        <td class="pa3 bg-light-gray">@oli</td>
                                        <td class="pa3 bg-light-gray">
                                            oliverg@companywithalongdomain.co
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            71165170352909
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            <button id="del-btn" class="grow"> Delete</button>
                                        </td>
                                    </tr>
                                    <tr class="stripe-dark">
                                        <td class="pa3 bg-light-gray">
                                            Dean Blanc
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            @deanblanc
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            dean@companywithalongdomain.co
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            71865178111909
                                        </td>
                                        <td class="pa3 bg-light-gray">
                                            <button id="del-btn" class="grow"> Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
