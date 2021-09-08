import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getSortedFamilyData } from '../lib/family';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

// By returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the Home component as a prop.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allFamilyData = getSortedFamilyData()
  return {
    props: {
      allPostsData,
      allFamilyData
    }
  }
}

export default function Home({ allPostsData, allFamilyData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>INTRODUCTION</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Family Members</h2>
        <ul>
          {allFamilyData.map(({ id, name }) => (
            <li key={id}>
              <Image
                src={`/images/${name}.png`}
                height={144}
                width={144}
              />
              <Link href={`family/${id}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
