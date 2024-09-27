import LoginForm from './login-form'
import MessageDisplay from './message-display'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-6 bg-card rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-card-foreground">Login</h1>
        <MessageDisplay />
        <LoginForm />
      </div>
    </div>
  )
}