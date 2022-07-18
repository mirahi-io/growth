import { useSession, signOut } from "next-auth/react"
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Component() {
  const {data:session} = useSession()
  const router = useRouter()
  useEffect(()=>{
    if(!session?.user?.email)
      router.push('/')
  },[session, router])
  return <>
    <p>Welcome teacher {session?.user?.name}</p>
    <button onClick={()=>signOut()}>Sign out</button>
  </>
}
