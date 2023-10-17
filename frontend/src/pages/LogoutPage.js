import { useEffect } from 'react'
import authStore from '../stores/authStore'

export default function LogoutPage() {
  const userStore = authStore();

  useEffect(() => {
    userStore.logout();
  }, []);

  return (
    <h1>You are now logged out</h1>
  )
}
