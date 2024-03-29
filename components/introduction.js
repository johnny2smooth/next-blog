import Link from 'next/link';
import layouts from '../styles/layouts.module.css';
import utility from '../styles/utility.module.css';
import StackWrapper from './stackwrapper';

export default function Introduction() {
  return (
    <StackWrapper tailwind={`bg-green-600 translate-y-[-1px]`}>
      <h1
        className={`${utility.fontXL}  leading-[1em] font-bold text-slate-50`}
      >
        Let's build a better tingy together for the sake of $
      </h1>
      <div className={`${layouts.switcher}`}>
        <p className={`${utility.fontSmall} max-w-prose text-slate-50`}>
          I am currently working as a full-stack developer for a{' '}
          <Link href="/">
            <a className="text-purple-200 underline">
              research team at the University of Washington
            </a>
          </Link>
          . I spend my free time building{' '}
          <Link href="/">
            <a className="text-blue-200 underline">various projects</a>
          </Link>{' '}
          to show off on here, playing tennis & basketball, and sharing laughs
          with my friends.
        </p>
        <p className={`${utility.fontSmall} max-w-prose text-slate-100`}>
          I am currently working as a full-stack developer for a{' '}
          <Link href="/">
            <a className="text-red-200 underline">
              research team at the University of Washington
            </a>
          </Link>
          . I spend my free time building{' '}
          <Link href="/">
            <a className="text-yellow-200 underline">various projects</a>
          </Link>{' '}
          to show off on here, playing tennis & basketball, and sharing laughs
          with my friends. If this one is a little long than the other, what
          happens?
        </p>
      </div>
    </StackWrapper>
  );
}
