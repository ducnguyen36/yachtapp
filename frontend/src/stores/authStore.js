import { create } from 'zustand';
import axios from 'axios';

//create yacht store
const authStore = create((set) => ({
  loggedIn: null,

  signupForm: {
    email: '',
    password: '',
    role: 'Crew'
  },

  loginForm: {
    email: '',
    password: ''
  },

  user: {
    email: '',
    role: ''
  },
  
  handleChangePassword: async (e) => {
    if(e.target.name === 'new-password') {
      set(state => ({
        user: {
          ...state.user,
          password: e.target.value
        }
      }))
    }
  },

  handleSignupInput: async (e) => {
    const { name, value } = e.target;
    set(state => ({
      signupForm: {
        ...state.signupForm,
        [name]: value
      }
    }))
  },

  handleLoginInput: async (e) => {
    const { name, value } = e.target;
    set(state => ({
      loginForm: {
        ...state.loginForm,
        [name]: value
      }
    }))
  },

  login: async (e) => {
    try {
      const { loginForm } = authStore.getState();
      const res = await axios.post('/login', loginForm, { withCredentials: true });
      console.log(res.data);
      //update state and clear form
      set({ 
        loggedIn: true ,
        user: {
          email: res.data.user.email,
          role: res.data.user.role
        }
      });
      
    } catch (error) {
      console.log(error);
    }
  },

  signup: async (e) => {
    const { signupForm } = authStore.getState();
    try {
      const res = await axios.post('/signup', signupForm, { withCredentials: true });
      console.log(res.data);
      //update state and clear form
      set({
        signupForm: {
          email: '',
          password: '',
          role: 'Crew'
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  
  checkAuth: async () => {
    try {
      const res = await axios.get('/check-auth', { withCredentials: true });
      // console.log(res.data.user);
      set({ 
        loggedIn: true ,
        user: {
          email: res.data.user.email,
          role: res.data.user.role
        }
      });
    } catch (error) {
      set({ 
        loggedIn: false ,
        user: {
          email: '',
          role: ''
        }
      });
      console.log(error);
    }
  },

  logout: async () => {
    try {
      const res = await axios.get('/logout', { withCredentials: true });
      console.log(res.data);
      set({ 
        loggedIn: false ,
        user: {
          email: '',
          role: ''
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}));

export default authStore;