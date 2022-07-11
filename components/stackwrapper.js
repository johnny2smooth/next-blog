import layouts from '../styles/layouts.module.css';

export default function StackWrapper({
  children,
  tailwind,
  wrapFirst = false,
}) {
  return (
    <>
      {wrapFirst ? (
        <div className={tailwind}>
          <div className={`${layouts.wrapper}`}>
            <div className={layouts.stack}>{children}</div>
          </div>
        </div>
      ) : (
        <div className={`${layouts.stack} ${tailwind}`}>
          <div className={layouts.wrapper}>{children}</div>
        </div>
      )}
    </>
  );
}
