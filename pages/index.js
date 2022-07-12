import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import layouts from '../styles/layouts.module.css';
import utility from '../styles/utility.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Highlights from '../components/highlights';
import Introduction from '../components/introduction';
import Curve from '../components/curve';
import Blog from '../components/blog';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utility.section}>
        <Curve color="fill-green-600" />
        <Introduction />
        <Curve color="fill-green-600" />
      </section>
      <section className={utility.section}>
        <Highlights />
      </section>
    </Layout>
  );
}
