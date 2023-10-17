import React from 'react'
import authStore from "../stores/authStore"

export default function UserDetailPage() {
  const store = authStore();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await store.signup();

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
            value={store.user.email}
            disabled
        />
        <label htmlFor='role'>Role</label>
        <input
          name="role"
          value={store.user.role}
          disabled
        >
          
        </input>
        
    </form>
  )
}
