import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Highlights() {
  return (
    <>
      <div className="flex items-baseline gap-1">
        <p className="text-3xl">Highlights</p>
        <p className="text-xs">I am most proud of these</p>
      </div>
      <motion.div
        animate={{ scale: [1, 0.75, 1, 1] }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-6 my-4 mx-2"
      >
        <Link href="/">
          <motion.a
            href="/"
            className=" bg-whiteLight mx-auto w-full rounded h-32 flex border-4 border-blueWater shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="mx-auto my-auto text-lg font-black">1</p>
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a
            href="/"
            className=" bg-whiteLight mx-auto w-full rounded h-32 flex border-4 border-blueWater shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="mx-auto my-auto text-lg font-black">2</p>
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a
            href="/"
            className=" bg-whiteLight mx-auto w-full rounded h-32 flex border-4 border-blueWater shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="mx-auto my-auto text-lg font-black">3</p>
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a
            href="/"
            className=" bg-whiteLight mx-auto w-full rounded h-32 flex border-4 border-blueWater shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="mx-auto my-auto text-lg font-black">4</p>
          </motion.a>
        </Link>
      </motion.div>
    </>
  );
}
