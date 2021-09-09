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
        <p className={utilStyles.aboutMe}> I am upbeat, a self-motivated team player and enjoy spending my free time in the mountains. I was a competitive dancer (tap, jazz and ballet) from the age of 10-18. At that time I dabbled in rock climbing only at birthday parties and summer camp excursions. It wasn’t until I came across my university’s climbing club did my passion jump to a new level. I currently live in Denver with my husband and three cats. We spend our weekends trying new restaurants, climbing, mountain biking, seeking out the latest food fads, backcountry snowboarding, playing pickleball or exploring new foods. Did I mention I love eating?
        <br/>
        I started working for my parents at the ripe old age of 13, eager to learn the ins and out of owning a small business. My passion for the restaurant industry, numbers and optimizing efficiency drove me to earning a bachelor’s degree in supply chain management with an emphasis in data analytics. I soon realized that front-end development and my past work experiences have many overlapping analytical skills that I thought could be valuable in this career transition.
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
        <ul className={utilStyles.familyList}>
          {allFamilyData.map(({ id, name }) => (
            <li key={id} className={utilStyles.familyCard}>
              <Image
                src={`/images/${name}.png`}
                height={200}
                width={144}
              />
              <Link href={`/family/${id}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
