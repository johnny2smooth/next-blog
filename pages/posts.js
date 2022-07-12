import Blog from '../components/blog';
import Curve from '../components/curve';
import Layout from '../components/layout';
import StackWrapper from '../components/stackwrapper';
import { getSortedPostsData } from '../lib/posts';
import utility from '../styles/utility.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <>
      <Layout>
        <section className={`${utility.section}`}>
          <Curve color={`fill-green-600`} />
          <StackWrapper wrapFirst tailwind={'bg-green-600'}>
            <Blog allPostsData={allPostsData} />
          </StackWrapper>
          <Curve color={`fill-green-600`} />
        </section>
      </Layout>
    </>
  );
}
