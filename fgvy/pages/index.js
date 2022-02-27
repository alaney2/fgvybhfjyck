import Head from 'next/head'
import Image from 'next/image'
import NavigationBar from '../components/Navbar'
import CallToActionWithAnnotation from '../components/CTA'

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Head>
        <title>Property Manager</title>
      </Head>

      <main>
        <CallToActionWithAnnotation />
      </main>

    </div>
  )
}
