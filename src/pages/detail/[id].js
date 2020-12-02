import { useRouter } from 'next/router'

function HomePage () {
  const router = useRouter()
  const { id } = router.query

  return <div>Welcome to Next.js! Here is ID: {id}</div>
}

export default HomePage
