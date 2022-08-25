const Signup = () => {
    return (
        <form>
            <h1>Sign Up</h1>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" required/>
            <div className="email error"></div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" required/>
            <div className="password error"></div>
            <button>Sign Up</button>
        </form>
    )
  }
  
  export default Signup;