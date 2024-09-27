import SignupForm from './signup-form'

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Sign Up</h1>
        <SignupForm />
      </div>
    </div>
  )
}