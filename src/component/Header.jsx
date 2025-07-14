import React, { useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import '../styles/Header.css';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const {logout}=useContext(AuthContext)
  // Check if current path is not /dashboard
  const showBackButton = location.pathname !== '/dashboard';

  return (
    <>
      <div className="header">
        <div className="header-left">
          {showBackButton && (
            <button className="back-btn" onClick={() => navigate('/dashboard')}>
              Back
            </button>
          )}
        </div>

        <h1 className="header-title">Pokemon-Directory</h1>

        <div className="header-right">
          <button className="fav-btn" onClick={() => navigate('/list')}>Favourites</button>
          <img
             src="/move.png" alt="exist" 

            className="logout-icon"
            onClick={() => logout()}
          />
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Header;
