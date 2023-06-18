import { useSession, signIn, signOut } from 'next-auth/react'

const Home = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>loading now...</p>
  }

  if (status === 'authenticated') {
    return (
      <div>
        <button onClick={() => signOut()}>signOut</button>
        <span>{session.user?.name}</span>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return <button onClick={() => signIn()}>signIn</button>
  }
}

export default Home
