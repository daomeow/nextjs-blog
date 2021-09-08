import Link from 'next/link';

export default function Custom404() {
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </section>
  )
}