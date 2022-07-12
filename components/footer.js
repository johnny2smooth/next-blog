import utility from '../styles/utility.module.css';
import layouts from '../styles/layouts.module.css';
import Curve from './curve';
import Link from 'next/link';
import StackWrapper from './stackwrapper';

export default function Footer({ children }) {
  return (
    <StackWrapper>
      <div className={`text-center`}>
        <button
          className={`hover:bg-slate-700 hover:text-purple-400 ${utility.fontLarge} text-slate-900 font-bold border-4 rounded-[50%] py-4 px-8 border-solid border-slate-900`}
        >
          Get in touch
        </button>
        <Link href="/">
          <a
            href="/"
            className={`${utility.fontMedium} underline text-blue-600`}
          >
            email@email.com
          </a>
        </Link>
      </div>
    </StackWrapper>
  );
}
