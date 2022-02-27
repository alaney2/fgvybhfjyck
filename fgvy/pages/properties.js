import Head from 'next/head'
import Sidebar from '../components/Sidebar';
import AtAGlance from '../components/AtAGlance';

export default function Properties() {
  return (
    <div>
      <Head>
        <title>Property Manager</title>
      </Head>
      <Sidebar content={AtAGlance} />
      
      <main>
      </main>
    </div>
  )
}
