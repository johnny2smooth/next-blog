import utility from '../styles/utility.module.css';
import layouts from '../styles/layouts.module.css';
import Curve from './curve';
import Link from 'next/link';

export default function Footer({ children }) {
  return (
    <section className={`${utility.section}`}>
      <Curve color="fill-purple-600" />
      <div className={`bg-purple-600 p-4 ${layouts.stack} text-center`}>
        <div className={`${utility.wrapper}`}>
          <button
            className={`hover:bg-slate-200 hover:text-purple-400 text-[8vw] text-slate-100 font-bold border-4 rounded-[50%] py-4 px-8 border-solid border-slate-100`}
          >
            Get in touch
          </button>
          <Link href="/">
            <a href="/" className="underline text-[4vw] text-purple-200">
              email@email.com
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
