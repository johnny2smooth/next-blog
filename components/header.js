import Link from 'next/link';
import Image from 'next/image';
import utility from '../styles/utility.module.css';
import Curve from './curve';

export default function Header() {
  return (
    <header className={`${utility.section} `}>
      <div className="flex justify-between flex-wrap items-center w-full bg-green-600">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/memoji-peace.jpg"
                className="rounded-full pl-4 bg-green-600"
                height={144}
                width={144}
                alt="Johnny's memoji"
              />
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex flex-wrap">
            <li>
              <Link href="/">
                <a className="text-black font-bold pr-4 underline hover:text-blue-600 grow">
                  about me
                </a>
              </Link>
              <Link href="/">
                <a className="text-black font-bold pr-4 underline hover:text-blue-600 grow">
                  portfolio
                </a>
              </Link>
              <Link href="/posts">
                <a className="text-black font-bold pr-4 underline hover:text-blue-600 grow">
                  blog + videos
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Curve color="fill-green-600" />
    </header>
  );
}
