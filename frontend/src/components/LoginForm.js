import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore"

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await store.login();
      
      //redirect to home page
      navigate('/');
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleLogin}>
        <label htmlFor='email'>email</label>
        <input 
            type='email'
            name='email'
            value={store.loginForm.email}
            onChange={store.handleLoginInput}
        />
        <label htmlFor='password'>Password</label>
        <input 
            type='password'
            name='password'
            value={store.loginForm.password}
            onChange={store.handleLoginInput}
        />
        
        <button type='submit'>Login</button>
    </form>
  )
}
