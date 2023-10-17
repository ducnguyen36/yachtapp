import { useEffect } from "react"
import authStore from "../stores/authStore"
import { Navigate } from "react-router-dom"

export default function UnrequireAuth(props) {
  const store = authStore()
  
  useEffect(() => {
    if(store.loggedIn === null) store.checkAuth();
  },[])

  if(store.loggedIn === null) return <div>Loading...</div>;
  if(store.loggedIn === true) return <Navigate to='/' />;
  return props.children;
}
