import Layout from '../../components/layout';
import { getAllFamilyIds, getFamilyData } from '../../lib/family';
import Head from 'next/head';

export default function Family ({ postData }) {
  return (
    <Layout>
      {console.log(postData.contentHtml)}
      <section>
        <h1>Details Page</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </Layout>
  )
};

export async function getStaticPaths() {
  const paths = getAllFamilyIds()
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({ params }) {
  // remark needs await 
  const postData = await getFamilyData(params.id)
  return {
    props: {
      postData
    }
  }
};