import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuthButton from './GoogleAuthButton';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setLoginError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/');
      } else {
        setLoginError(data.message || 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Network error or server is not responding.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-start" style={{ minHeight: "100vh", paddingTop: "100px" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "450px", width: "100%", minHeight: "500px" }}>
        <h3 className="text-center mb-4">Login</h3>

        {/*Show login error if any*/}
        {loginError && (
          <div className="alert alert-danger" role="alert">
            {loginError}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button 
                type="button" 
                className="btn btn-outline-secondary"
                onClick={handleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>

          {/* Divider */}
          <div className="text-center my-3">or</div>

          {/* Login with Google */}
          <GoogleAuthButton />

          {/* Forgot Password Link */}
          <div className="text-center mt-3">
            <Link to="/forgot-password" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-3">
            <p className="mb-0">
              New here? <Link to="/signup" className="text-primary">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;