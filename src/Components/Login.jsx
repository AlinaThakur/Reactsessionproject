import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import ErrorModal from "./ErrorModal";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
   const history = useNavigate()
 const header = {"Access-Control=Allow-Origin": "*"}

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const phoneHandler = (e) => {
  //   setPhone(e.target.value);
  // };
  // const passwordHandler = (e) => {
  //   setPassword(e.target.value);
  // };

const errorHandler = () =>{
  setError(false)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Clicked And Submitted")
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    
    axios.post("https://62e92b3b249bb1284ebbe2ab.mockapi.io/login/store-crud", {
      name:name,
      email:email,
      phone:phone,
      password:password,
      header,
    })
  
    // alert("Registration Successfully");
   if(name.trim().length === 0 || email.trim().length === 0 || phone.trim().length === 0 || password.trim().length === 0){
    setError(true);
    setErrorMsg({
      title:"Invalid Input",
      message:"Please enter valid information(non-empty value)"
    });
   
   }
   else{
    history('/home')
   }
  
  console.log(name,email,phone,password)
  };
  return (
    <div className="backdrop">
    {error && <ErrorModal title={errorMsg.title} message={errorMsg.message} onConfirm={errorHandler} />}
    <div className="login">
      <form className="card">
        <div>
          <label>Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={{ marginLeft: "32px", marginTop: "10px", outline: "none" }} required
          />
        </div>

        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{ marginLeft: "35px", marginTop: "10px", outline: "none" }} required
          />
        </div>
        <div>
          <label>Phone :</label>
          <input
            type="text"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            style={{ marginLeft: "30px", marginTop: "10px", outline: "none" }} required
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{ marginLeft: "9px", marginTop: "10px", outline: "none" }}
            required
          />
        </div>
        <button
          type="submit"
          // onChange={submitHandler}
           onClick={handleSubmit}
          style={{
            marginTop: "25px",
            width: "150px",
            height: "40px",
            marginLeft: "30%",
            border: "none",
          }}
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
