import SignIn from "../components/SignIn";
import Head from 'next/head'

export default function Login() {
  return (
    <div>
      <SignIn />
      <Head>
        <title>Account Login</title>
      </Head>
    </div>
  )
}