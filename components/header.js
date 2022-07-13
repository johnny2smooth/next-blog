import Link from 'next/link';
import Image from 'next/image';
import utility from '../styles/utility.module.css';
import Curve from './curve';
import StackWrapper from './stackwrapper';
import layouts from '../styles/layouts.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const [greeting, setGreeting] = useState('Hello');
  const router = useRouter();
  const links = ['/about', '/portfolio', '/posts'];
  const hello = [
    '你好',
    '今日は',
    '안녕하세요',
    'Bonjour',
    'Hello',
    'Hola',
    'Hallo',
    'Ciao',
    'नमस्ते',
    'γεια σας',
    'Salve',
    'ᐊᐃᓐᖓᐃ',
    'Osiyo',
  ];

  return (
    <StackWrapper wrapFirst>
      <header className={`${utility.section}`}>
        <div className={`${layouts.switcher} items-center`}>
          <div className={`flex items-center ${utility.fontLarge} font-bold`}>
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
            <button
              onClick={() =>
                setGreeting(hello[Math.floor(Math.random() * hello.length)])
              }
            >
              {greeting}
            </button>
          </div>
          <nav>
            <ul className="flex flex-wrap space-around">
              {links.map((link) => (
                <li key={link}>
                  <Link href={`${link}`}>
                    <a
                      className={`${utility.fontSmall} ${
                        router.route === link ? 'text-blue-600' : 'text-black'
                      } font-bold pr-4 underline hover:text-blue-600`}
                    >
                      {`${link.slice(1)}`}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </StackWrapper>
  );
}
