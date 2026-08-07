import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center px-4 py-16" style={{ minHeight: '75vh' }}>
      <div className="mb-6 text-center">
        <span
          className="text-3xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#A05A6A', fontStyle: 'italic', fontWeight: 700 }}
        >
          Kith
        </span>
      </div>
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/account"
      />
    </div>
  )
}
