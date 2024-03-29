import Link from 'next/link';
import { motion } from 'framer-motion';
import layouts from '../styles/layouts.module.css';
import utility from '../styles/utility.module.css';
import Card from './card';
import StackWrapper from './stackwrapper';

export default function Highlights() {
  return (
    <StackWrapper wrapFirst>
      <div className="flex items-baseline gap-1">
        <p className={`${utility.fontMedium}`}>Highlights</p>
        <p className={`${utility.fontXS}`}>I am most proud of these</p>
      </div>
      <motion.div
        animate={{ scale: [1, 0.75, 1, 1] }}
        transition={{ duration: 0.5 }}
        className={`${layouts.grid}`}
        data-rows="masonry"
        data-layout="50-50"
      >
        <Card to={'/'} children={'1'} />
        <Card to={'/'} children={'2'} />
        <Card to={'/'} children={'3'} />
        <Card to={'/'} children={'4'} />
      </motion.div>
    </StackWrapper>
  );
}
