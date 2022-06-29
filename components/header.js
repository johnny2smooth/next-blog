import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const name = 'Johnny P';

export default function Header({ home }) {
  return (
    <header>
      {home ? (
        <>
          <Image
            priority
            src="/images/profile.jpeg"
            className="rounded-full"
            height={144}
            width={144}
            alt={name}
          />
          <h1>{name}</h1>
        </>
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
  );
}
