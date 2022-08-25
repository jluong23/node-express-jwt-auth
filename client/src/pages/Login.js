import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const loginPost = async (e) => {
        e.preventDefault();
        // get form values from event
        const email = e.target.email.value;
        const password = e.target.password.value;
        // reset email and password input fields when submit is pressed
        setEmailError("");
        setPasswordError("");
        try{
            const response = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {'Content-Type': 'application/json'}
            })
            const data = await response.json();
            if(data.errors){
                // unsuccessful login, 
                // display form validation errors returned from server
                setEmailError(data.errors.email);
                setPasswordError(data.errors.password);
            }else if(data.user){
                // login successful, redirect to index
                navigate("/");
            }
        }catch(err){
            console.log(err);
        }
    }
    

    return (
        <form onSubmit={(e) => {loginPost(e)}}>
            <h1>Log In</h1>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" required/>
            <div className="email error">{emailError}</div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" required/>
            <div className="password error">{passwordError}</div>
            <button>Log In</button>
        </form>
    )
  
}
  
export default Login;