import {signOut, useSession} from "next-auth/react"
import {useRouter} from "next/router";
import {useEffect} from "react";
import axios from "axios";

export default function Component() {
  const {data:session} = useSession()
  const router = useRouter()
  useEffect(()=>{
    if(!session?.user?.email)
      router.push('/')
  },[session, router])
  const id = session?.user?.email?.split('@', 1)?.[0]
  return <>
    <p>Welcome student {session?.user?.name}</p><br/>
    <a href={`https://ide-${id}.growth.mirahi.cloud`}>IDE</a><br/>
    <a href={`https://www-${id}.growth.mirahi.cloud`}>Web server</a><br/>
    <button onClick={()=>signOut({callbackUrl: '/'})}>Sign out</button>
  </>

}

export async function getServerSideProps(context) {
  console.log(Object.keys(context))
  axios({
    method: "post",
    url: "https://www.growth.mirahi.cloud/",
    data: {username: 'admin', password: 'dockside'},
    headers: { "Content-Type": "application/x-www-form-urlencoded",  },
    withCredentials: true
  })
      .then(function (response) {
        console.log(response)
        axios.get(`https://www.growth.mirahi.cloud/containers/create?name=tim&profile=01-dockside-own-ide&runtime=runc&network=bridge&private=0&access=%7B%22dockside%22%3A%22developer%22%2C%22passthru%22%3A%22owner%22%2C%22ide%22%3A%22developer%22%7D&viewers&developers&description`).then(console.log).catch(console.log)
      })
      .catch(function (response) {
      });
  return {
    props: {}, // will be passed to the page component as props
  }
}
