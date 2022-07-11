import Link from 'next/link';
import Date from './date';
import layouts from '../styles/layouts.module.css';
import utility from '../styles/utility.module.css';
import StackWrapper from './stackwrapper';

export default function Blog({ allPostsData }) {
  return (
    <StackWrapper tailwind="bg-[#ee5141]" wrapFirst>
      <h2 className={`text-[8vw] text-slate-100`}>Blog</h2>
      <ul className={`${layouts.stack} w-full`}>
        {allPostsData.map(({ id, date, title, snippet }) => (
          <li key={id} className="">
            <Link href={`/posts/${id}`}>
              <a className="text-[5vw] leading-[1em] text-slate-100">{title}</a>
            </Link>
            <br />
            <p className="text-[3vw] text-slate-400">{snippet}</p>
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </StackWrapper>
  );
}
