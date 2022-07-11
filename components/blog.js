import Link from 'next/link';
import Date from './date';
import layouts from '../styles/layouts.module.css';

export default function Blog({ allPostsData }) {
  return (
    <section className={`${layouts.stack} bg-[#ee5141] `}>
      <h2 className={`text-[8vw]`}>Blog</h2>
      <ul className={`${layouts.stack}`}>
        {allPostsData.map(({ id, date, title, snippet }) => (
          <li key={id} className="">
            <Link href={`/posts/${id}`}>
              <a className="text-xl ">{title}</a>
            </Link>
            <br />
            <p className="text-xs text-slate-400">{snippet}</p>
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
