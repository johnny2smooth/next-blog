import Link from 'next/link';
import Date from './date';
import layouts from '../styles/layouts.module.css';
import utility from '../styles/utility.module.css';
import StackWrapper from './stackwrapper';

export default function Blog({ allPostsData }) {
  return (
    <StackWrapper tailwind="bg-green-600" wrapFirst>
      <h2 className={`${utility.fontLarge} text-slate-100`}>Blog</h2>
      <ul className={`${layouts.stack}  w-full `}>
        {allPostsData.map(({ id, date, title, snippet }) => (
          <li key={id} className={`${utility.flow}`}>
            <Link href={`/posts/${id}`}>
              <a
                className={`${utility.fontMedium} leading-[1em] text-slate-100`}
              >
                {title}
              </a>
            </Link>
            <br />
            <p className={`${utility.fontSmall} text-yellow-200`}>{snippet}</p>
            <small className={`${utility.fontXS} text-slate-900`}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </StackWrapper>
  );
}
