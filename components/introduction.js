import Link from 'next/link';
import layouts from '../styles/layouts.module.css';

export default function Introduction() {
  return (
    <div
      className={`${layouts.switcher} py-8 px-2 bg-green-600 translate-y-[-1px]`}
    >
      <h1 className="max-w-prose text-4xl font-bold text-red-100">
        Let's build a better tingy together for the sake of $$$$
      </h1>
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
  );
}
