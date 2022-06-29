import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './footer';

const name = 'Johnny P';
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
        {home ? (
          <div className="flex justify-between items-baseline w-full">
            <div className="flex items-center">
              <h1 className="text-7xl font-black pr-4 ">{name}</h1>
              <Image
                priority
                src="/images/profile.jpeg"
                className="rounded-full pl-4"
                height={108}
                width={108}
                alt={name}
              />
            </div>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a className="text-black font-bold pr-4 underline hover:text-blue-600">
                      something to somewhere
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-black font-bold pr-4 underline hover:text-blue-600">
                      something to somewhere
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-black font-bold pr-4 underline hover:text-blue-600">
                      something to somewhere
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="">{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
