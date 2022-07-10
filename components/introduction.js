import Link from 'next/link';
import layouts from '../styles/layouts.module.css';

export default function Introduction() {
  return (
    <div className={`${layouts.switcher} my-8`}>
      <h1 className="max-w-prose text-4xl">
        Hi, <strong className="text-green-600"> I'm Johnny</strong>. I want to
        help build speedy & elegant products with you!
      </h1>
      <p className="max-w-prose">
        I am currently working as a full-stack developer for a{' '}
        <Link href="/">
          <a>research team at the University of Washington</a>
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
