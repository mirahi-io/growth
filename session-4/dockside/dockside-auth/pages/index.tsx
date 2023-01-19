import { useSession, signIn} from "next-auth/react"
import {useRouter} from "next/router";
import {useEffect} from "react";


export default function Component() {
  const {data:session} = useSession()
  const router = useRouter()

  console.log(session)
  useEffect(()=>{
    if(session?.user?.email === 'tim@mirahi.io')
      router.push('/teacher')
    else if(session?.user?.email)
      router.push('/student')
  },[session, router])

    return <button onClick={()=> signIn()}>Sign in</button>
}
