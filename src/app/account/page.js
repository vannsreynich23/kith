import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

export default async function AccountPage() {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
  }

  const user = await currentUser()

  return (
    <div className="flex justify-center px-4 py-16">
      <div
        className="w-full max-w-md rounded-2xl p-8 text-center"
        style={{ backgroundColor: '#FFFAF9', border: '1px solid #E8D5D7' }}
      >
        <div className="flex justify-center mb-4">
          <UserButton afterSignOutUrl="/" />
        </div>

        <h1
          className="text-2xl mb-1"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', color: '#3D2B2E' }}
        >
          Welcome, {user?.firstName || 'friend'}
        </h1>
        <p className="text-sm" style={{ color: '#8B6B6F' }}>
          {user?.primaryEmailAddress?.emailAddress}
        </p>

        <div className="mt-8 text-left text-sm" style={{ color: '#8B6B6F' }}>
          <p>You&apos;re signed in. Order history, saved addresses, and wishlist can go here.</p>
        </div>
      </div>
    </div>
  )
}
