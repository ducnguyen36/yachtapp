import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserDetailPage from './pages/UserDetailPage';
import CustomersPage from './pages/CustomersPage';
import YachtsPage from './pages/YachtsPage';
import BookingsPage from './pages/BookingsPage';
import BookingsCalendarPage from './pages/BookingsCalendarPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LogoutPage from './pages/LogoutPage';
import RequireAuth from './components/RequireAuth';
import UnrequireAuth from './components/UnrequireAuth';
import authStore from './stores/authStore';
import { useEffect } from 'react';
import './App.css';

function App() {
  const userStore = authStore();

  useEffect(() => {
    userStore.checkAuth();
  }, []);
  
  //functions

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            {userStore.loggedIn?
              <>
                <li>
                  <Link to='/user'>
                    {userStore.user.email}
                  </Link>
                </li>
                <li>
                  <Link to='/'>Schedule</Link>
                </li>
                <li>
                  <Link to='/bookings'>Bookings</Link>
                </li>
                <li>
                  <Link to='/customers'>Customers</Link>
                </li>
                <li>
                  <Link to='/yachts'>Yachts</Link>
                </li>
                <li>
                  <Link to='/logout'>Logout</Link>
                </li>
              </>
                :
              <>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/signup'>Signup</Link>
                </li>
              </>
            }
          </ul>
        </nav>
        <Routes>
          <Route path='/user' element={
            <RequireAuth>
              <UserDetailPage />
            </RequireAuth>
          }/>
          <Route path='/customers' element={
            <RequireAuth>
              <CustomersPage />
            </RequireAuth>
          }/>
          <Route path='/bookings' element={
            <RequireAuth>
              <BookingsPage />
            </RequireAuth>
          }/>
          <Route index element={
            <RequireAuth>
              <BookingsCalendarPage />
            </RequireAuth>
          }/>
          <Route path='yachts' element={
            <RequireAuth>
              <YachtsPage />
            </RequireAuth>
          }/>
          <Route path='/login' element={
            <UnrequireAuth>
              <LoginPage />
            </UnrequireAuth>
          } />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/logout' element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
