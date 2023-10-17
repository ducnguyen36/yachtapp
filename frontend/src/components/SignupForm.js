import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore"
import "./SignupForm.css"

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await store.signup();

      //redirect to login page
      navigate('/login');

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSignup}>
        <label htmlFor='email'>Email:</label>
        <input 
            type='email'
            name='email'
            value={store.signupForm.email}
            onChange={store.handleSignupInput}
        />
        <label htmlFor='password'>Password:</label>
        <input 
            type='password'
            name='password'
            value={store.signupForm.password}
            onChange={store.handleSignupInput}
        />
        <label htmlFor='role'>Role</label>
        <select
          name="role"
          value={store.signupForm.role}
          onChange={store.handleSignupInput}
        >
            <option value="Owner">Owner</option>
            <option value="Captain">Captain</option>
            <option value="Crew">Crew</option>
            <option value="Back Office">Back Office</option>
        </select>
        <button type='submit'>Signup</button>
    </form>
  )
}
