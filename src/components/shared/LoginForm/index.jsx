const LoginForm = () => {
    const formStyle = {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f8f9fa",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };
  
    const headingStyle = {
      textAlign: "center",
      marginBottom: "20px",
      fontWeight: "bold",
      fontSize: "24px",
    };
  
    const footerStyle = {
      textAlign: "center",
      color: "#6c757d",
      fontSize: "14px",
      marginTop: "30px",
    };
  
    return (
      <form style={formStyle}>
        <h1 style={headingStyle}>Please sign in</h1>
  
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
  
        <div className="form-check text-start mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="checkDefault"
          />
          <label className="form-check-label" htmlFor="checkDefault">
            Remember me
          </label>
        </div>
  
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    );
  };
  
  export default LoginForm;
  