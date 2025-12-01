import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <>
      {currentPage === 'login' ? (
        <LoginPage onLogin={() => setCurrentPage('dashboard')} />
      ) : (
        <DashboardPage onLogout={() => setCurrentPage('login')} />
      )}
    </>
  );
}

export default App;
