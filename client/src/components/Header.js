const Header = () => {
    return (
        <nav>
            <h1><a href="/">Ninja Smoothies</a></h1>
            <ul>
                <li>Welcome User!</li>
                <li><a href="/logout">Logout</a></li>
                <li><a href="/login">Log In</a></li>
                <li><a href="/signup" className="btn">Sign Up</a></li>
            </ul>
      </nav>
    )
}

export default Header;