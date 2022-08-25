const Login = () => {
    return (
        <form>
            <h1>Log In</h1>
            <label for="email">Email</label>
            <input name="email" type="text" required/>
            <div class="email error"></div>
            <label for="password">Password</label>
            <input name="password" type="password" required/>
            <div class="password error"></div>
            <button>Log In</button>
        </form>
    )
  }
  
  export default Login;