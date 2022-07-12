import utility from '../styles/utility.module.css';

export default function Curve({ color }) {
  return (
    <svg
      className={`${utility.curve} ${color}`}
      preserveAspectRatio="none"
      viewBox="0 0 1440 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z" />
    </svg>
  );
}
