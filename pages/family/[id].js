import Layout from '../../components/layout';
import { getAllFamilyIds, getFamilyData } from '../../lib/family';
import Head from 'next/head';

export default function Family ({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.name}</title>
      </Head>
      <section>
        <h2>All About {postData.name}!</h2>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </Layout>
  )
};

// Returns an array of possible vlaues for id
export async function getStaticPaths() {
  const paths = getAllFamilyIds()
  return {
    paths,
    fallback: false
  }
};

// On pre-render parse data to pass object to Home component 
export async function getStaticProps({ params }) {
  // remark needs await 
  const postData = await getFamilyData(params.id)

  return {
    props: {
      postData
    }
  }
};