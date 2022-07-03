import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="flex flex-wrap ">
      <h1 className=" text-4xl w-full mx-auto max-w-lg my-6">
        Hi, <strong className="text-green-600"> I'm Johnny</strong>. I want to
        help build speedy & elegant products with you!
      </h1>
      <p className="max-w-prose my-6">
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
