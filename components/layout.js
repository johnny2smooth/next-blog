import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './footer';

const name = '2';
export const siteTitle = 'Johnny P Home';

export default function Layout({ children, home }) {
  return (
    <div className="p-4">
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
      <header className="mb-4">
        <div className="flex justify-between flex-wrap items-center w-full">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/memoji-peace.jpg"
                  className="rounded-full pl-4"
                  height={144}
                  width={144}
                  alt="Johnny's memoji"
                />
              </a>
            </Link>
            {/* {home && (
              <Link href="/">
                <a className="text-black grow-1">
                  <h1 className="text-8xl md:text-7xl font-black px-6">
                    {name}
                  </h1>
                </a>
              </Link>
            )} */}
          </div>
          <nav>
            <ul className="flex flex-wrap md:text-3xl">
              <li>
                <Link href="/">
                  <a className="text-black font-bold pr-4 underline hover:text-blue-600 grow">
                    About me
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-black font-bold pr-4 underline hover:text-blue-600 grow">
                    Portfolio
                  </a>
                </Link>
                <Link href="/posts">
                  <a className="text-black font-bold pr-4 underline hover:text-blue-600 grow">
                    Blog + Videos
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
