import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import md from 'markdown-it';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        Cross-Origin-Resource-Policy: same-site
      </Head>
      <article className="prose prose-slate prose-lg max-w-prose mx-auto">
        <h3 className="text-6xl bg-slate-800 text-slate-100 p-4 rounded-sm">
          {postData.title}
        </h3>
        <h4>{postData.snippet}</h4>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {postData.stackblitz && (
          <iframe
            className="w-full h-96"
            crossorigin
            src={postData.stackblitz}
          ></iframe>
        )}
        <h5>{postData.outro}</h5>
      </article>
    </Layout>
  );
}
