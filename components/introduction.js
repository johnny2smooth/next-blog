import Link from 'next/link';
import layouts from '../styles/layouts.module.css';
import Curve from './curve';

export default function Introduction() {
  return (
    <div
      className={`${layouts.stack} py-8 px-4 bg-green-600 translate-y-[-1px]`}
    >
      <h1 className=" text-[8vw] leading-[1em] font-bold text-red-100">
        Let's build a better tingy together for the sake of $
      </h1>
      <div className={layouts.switcher}>
        <p className="max-w-prose text-lg text-slate-100">
          I am currently working as a full-stack developer for a{' '}
          <Link href="/">
            <a className="text-red-200 underline">
              research team at the University of Washington
            </a>
          </Link>
          . I spend my free time building{' '}
          <Link href="/">
            <a>various projects</a>
          </Link>{' '}
          to show off on here, playing tennis & basketball, and sharing laughs
          with my friends.
        </p>
        <p className="max-w-prose text-lg text-slate-100">
          I am currently working as a full-stack developer for a{' '}
          <Link href="/">
            <a className="text-red-200 underline">
              research team at the University of Washington
            </a>
          </Link>
          . I spend my free time building{' '}
          <Link href="/">
            <a>various projects</a>
          </Link>{' '}
          to show off on here, playing tennis & basketball, and sharing laughs
          with my friends.
        </p>
      </div>
    </div>
  );
}
