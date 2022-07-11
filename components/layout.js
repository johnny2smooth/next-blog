import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './footer';
import Curve from './curve';
import Header from './header';
import layouts from '../styles/layouts.module.css';

const name = '2';
export const siteTitle = 'Johnny P Home';

export default function Layout({ children, home }) {
  return (
    <div className={layouts.stack}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="A blog for Johnny P"
          content="Learning how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main className="">{children}</main>
      {!home && (
        <div className="text-3xl">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
