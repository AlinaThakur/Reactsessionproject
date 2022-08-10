import React from "react";
import { manuData } from "./Data";
// import './Menu.css'

const Manu = () => {
  const DisplayData = manuData.map((info) => {
    return (
      
     <tr>
       <td> <li>{info.name}</li></td> 
        {/* <td> 🍎</td> */}
       <td style={{paddingLeft:"100px", }}>{info.Price}</td>
       </tr>
       
      
     
     
    
    );
  });
  return (
    <div className="menu">
      <div className="menudata">
        <div className="ft">
        <h2>Welcome to Fruits Menu</h2>
        </div>
      <div className="menuBar">
      <table >
      <tr>
        <th>Name</th>
        <div style={{marginLeft:"-75px"}}> <th>Price</th></div>
        {/* <th>Price</th> */}
      </tr>
      <ol>
      {DisplayData}
</ol>
      </table>
      </div>
      </div>
    </div>
  );
};

export default Manu;
