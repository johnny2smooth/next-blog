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
        <Introduction />
        <Curve color="fill-green-600" />
      </section>
      <section className={utility.section}>
        <Curve color="fill-green-600" />
        <Highlights />
        <Curve color="fill-green-600" />
      </section>
      <section className={`${layouts.stack}`}>
        <h2 className={`text-3xl`}>Blog</h2>
        <ul className={`${layouts.stack}`}>
          {allPostsData.map(({ id, date, title, snippet }) => (
            <li key={id} className="">
              <Link href={`/posts/${id}`}>
                <a className="text-xl ">{title}</a>
              </Link>
              <br />
              <p className="text-xs text-slate-400">{snippet}</p>
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
