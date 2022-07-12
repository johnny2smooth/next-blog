import layouts from '../styles/layouts.module.css';
import utility from '../styles/utility.module.css';

export default function StackWrapper({
  children,
  tailwind,
  wrapFirst = false,
}) {
  return (
    <>
      {wrapFirst ? (
        <div className={`${tailwind} ${utility.region}`}>
          <div className={`${layouts.wrapper} ${utility.region}`}>
            <div className={layouts.stack}>{children}</div>
          </div>
        </div>
      ) : (
        <div className={`${layouts.stack} ${utility.region} ${tailwind}`}>
          <div className={layouts.wrapper}>{children}</div>
        </div>
      )}
    </>
  );
}
