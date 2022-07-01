import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Highlights from '../components/highlights';

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
      <section>
        <Highlights />
      </section>
      <section>
        <h2 className="text-3xl">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title, snippet }) => (
            <li key={id} className="my-4">
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
