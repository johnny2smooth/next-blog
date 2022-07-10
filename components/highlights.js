import Link from 'next/link';
import { motion } from 'framer-motion';
import layouts from '../styles/layouts.module.css';
import Card from './card';

export default function Highlights() {
  return (
    <div className={`${layouts.stack} my-8`}>
      <div className="flex items-baseline gap-1">
        <p className="text-3xl">Highlights</p>
        <p className="text-xs">I am most proud of these</p>
      </div>
      <motion.div
        animate={{ scale: [1, 0.75, 1, 1] }}
        transition={{ duration: 0.5 }}
        className={layouts.switcher}
      >
        <Card to={'/'} children={'1'} />
        <Card to={'/'} children={'2'} />
        <Card to={'/'} children={'3'} />
        <Card to={'/'} children={'4'} />
      </motion.div>
    </div>
  );
}
