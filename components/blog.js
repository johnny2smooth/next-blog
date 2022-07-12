import Link from 'next/link';
import Date from './date';
import layouts from '../styles/layouts.module.css';
import utility from '../styles/utility.module.css';
import StackWrapper from './stackwrapper';

export default function Blog({ allPostsData }) {
  return (
    <StackWrapper tailwind="bg-green-600" wrapFirst>
      <h2 className={`text-[8vw] text-slate-100`}>Blog</h2>
      <ul className={`${layouts.stack}  w-full divide-y-2`}>
        {allPostsData.map(({ id, date, title, snippet }) => (
          <li key={id} className={utility.region}>
            <Link href={`/posts/${id}`}>
              <a className="text-[5vw] leading-[1em] text-slate-100">{title}</a>
            </Link>
            <br />
            <p className="text-[3vw] text-yellow-200">{snippet}</p>
            <small className="text-[1vw] text-slate-900">
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </StackWrapper>
  );
}
