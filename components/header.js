import Link from 'next/link';
import Image from 'next/image';
import utility from '../styles/utility.module.css';
import Curve from './curve';
import StackWrapper from './stackwrapper';
import layouts from '../styles/layouts.module.css';

export default function Header() {
  return (
    <StackWrapper wrapFirst>
      <header className={`${utility.section}`}>
        <div className={`${layouts.switcher} items-center`}>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/memoji-peace.jpg"
                className="rounded-full"
                height={144}
                width={144}
                alt="Johnny's memoji"
              />
            </a>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a
                    className={`${utility.smallFont} text-black font-bold pr-4 underline hover:text-blue-600`}
                  >
                    about me
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className={`${utility.smallFont} text-black font-bold pr-4 underline hover:text-blue-600`}
                  >
                    portfolio
                  </a>
                </Link>
                <Link href="/posts">
                  <a
                    className={`${utility.smallFont} text-black font-bold pr-4 underline hover:text-blue-600`}
                  >
                    blog + videos
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </StackWrapper>
  );
}
