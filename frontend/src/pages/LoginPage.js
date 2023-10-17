import LoginForm from "../components/LoginForm"
import { Navigate } from "react-router-dom"
import authStore from "../stores/authStore"

export default function LoginPage() {

  return (
        <div>
          <h1>Login</h1>
          <LoginForm />
        </div>
  )
}
