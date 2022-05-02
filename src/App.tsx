import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  let navigate = useNavigate();
  const goHome = () => {
    navigate('/notes', { replace: true });
  };
  return (
    <div>
      <header>
        <div className='intro-page'>
          <div>
            {/* <Link to='/notes' style={{textDecoration: 'none'}}> */}
            <h1 onClick={goHome} style={{cursor: 'pointer'}}> Notes App</h1>

            {/* </Link> */}
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
