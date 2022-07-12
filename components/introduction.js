import Link from 'next/link';
import layouts from '../styles/layouts.module.css';
import utility from '../styles/utility.module.css';
import StackWrapper from './stackwrapper';

export default function Introduction() {
  return (
    <StackWrapper tailwind={`bg-green-600 translate-y-[-1px]`}>
      <h2
        className={`${utility.fontXL} pb-6  leading-[1em] font-bold text-slate-50`}
      >
        Let's build a better tingy together ✨🛠
      </h2>
      <div className={`${layouts.switcher}`}>
        <p className={`${utility.fontSmall} max-w-prose text-slate-50`}>
          What do you think about making this more of a CTA than an
          introduction? I think that is a{' '}
          <a className="text-pink-200">good idea!</a>{' '}
          <a className="text-blue-200">
            Another good idea is randomizing the colors of links with pretty
            pastels. Make a class for that.
          </a>
        </p>
      </div>
    </StackWrapper>
  );
}
