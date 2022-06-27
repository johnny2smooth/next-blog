import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First post!</h1>
      <h2>
        <Link href="/">
          <a className="text-blue-600">Back to Home</a>
        </Link>
      </h2>
    </Layout>
  );
}
