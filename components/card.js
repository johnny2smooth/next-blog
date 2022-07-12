import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Card({ to, children }) {
  return (
    <>
      <Link href={to}>
        <motion.a
          href={to}
          className={`bg-slate-50 border-slate-900 mx-auto w-full rounded h-[30vh] flex border-4 shadow-lg`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <p className="mx-auto my-auto text-lg font-black text-slate-900">
            {children}
          </p>
        </motion.a>
      </Link>
    </>
  );
}
