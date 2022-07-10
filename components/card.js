import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Card({ to, children }) {
  return (
    <>
      <Link href={to}>
        <motion.a
          href={to}
          className={`bg-whiteLight mx-auto w-full rounded h-[30vh] flex border-4 border-blueWater shadow-lg`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <p className="mx-auto my-auto text-lg font-black">{children}</p>
        </motion.a>
      </Link>
    </>
  );
}
