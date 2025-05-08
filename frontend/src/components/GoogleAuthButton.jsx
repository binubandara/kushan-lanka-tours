import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleAuthButton = ({ buttonText = "Continue with Google" }) => {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: credentialResponse.credential,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/');
      } else {
        console.error('Google authentication failed:', data.message);
      }
    } catch (error) {
      console.error('Google authentication error:', error);
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => console.error('Google Login Failed')}
        theme="outline"
        size="large"
        text={buttonText}
        useOneTap
      />
    </div>
  );
};

export default GoogleAuthButton;